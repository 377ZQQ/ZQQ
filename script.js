document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 【修改这里】：第一部分 - 已有图片列表
    // 确保文件名与仓库 img 文件夹内完全一致（区分大小写和后缀）
    // ==========================================
    const myExistingWorks = [
        'img/saber1.png',
        'img/saber2.png'
    ];
    // ==========================================

    const staticGallery = document.getElementById('static-gallery');
    const previewGallery = document.getElementById('preview-gallery');
    const fileInput = document.getElementById('fileInput');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // 通用渲染函数：确保图片被正确创建并显示
    function createCard(src, container) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = src;
        
        // 报错检查：如果图片加载失败，在控制台打印出来
        img.onerror = function() {
            console.error("图片加载失败，请检查路径是否正确:", src);
            item.innerHTML = `<div style="padding:20px; color:#666; font-size:12px;">图片路径错误:<br>${src}</div>`;
        };

        img.onload = function() {
            console.log("图片加载成功:", src);
        };

        item.onclick = () => {
            lightboxImg.src = src;
            lightbox.style.display = 'flex';
        };
        
        item.appendChild(img);
        container.appendChild(item);
    }

    // 1. 初始化展示：陈列馆图片
    if (staticGallery) {
        myExistingWorks.forEach(path => {
            createCard(path, staticGallery);
        });
    }

    // 2. 修复上传功能：预览投递处图片
    fileInput.addEventListener('change', function(e) {
        const files = e.target.files;
        if (files.length === 0) return;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            
            reader.onload = function(event) {
                // 将新上传的图放入“预览投递处”
                createCard(event.target.result, previewGallery);
            };
            
            reader.readAsDataURL(file);
        }
    });

    // 3. 灯箱关闭
    document.querySelector('.close-btn').onclick = () => lightbox.style.display = 'none';
    lightbox.onclick = (e) => { if(e.target === lightbox) lightbox.style.display = 'none'; };
});
