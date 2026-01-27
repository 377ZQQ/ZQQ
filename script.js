document.addEventListener('DOMContentLoaded', () => {
    const staticGallery = document.getElementById('static-gallery');
    const previewGallery = document.getElementById('preview-gallery');
    const fileInput = document.getElementById('fileInput');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // ==========================================
    // 【修改这里】：已有图片列表
    // 你的仓库路径是 https://377zqq.github.io/ZQQ/img/xxx.png
    // 所以这里直接写 'img/文件名.png' 即可
    // ==========================================
    const myExistingWorks = [
        'img/载入页1.png',
        'img/载入页2.png',
        'img/avemujica直播间.png'
    ];

    // 通用渲染函数
    function createCard(src, container) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = src;
        
        // 如果路径错误，显示提示
        img.onerror = function() {
            item.innerHTML = `<div style="padding:20px; color:#666; font-size:12px;">资源缺失:<br>${src.split('/').pop()}</div>`;
        };

        item.onclick = () => {
            lightboxImg.src = src;
            lightbox.style.display = 'flex';
        };
        
        item.appendChild(img);
        container.appendChild(item);
    }

    // 1. 初始化陈列馆
    if (staticGallery) {
        myExistingWorks.forEach(path => createCard(path, staticGallery));
    }

    // 2. 修复上传预览逻辑
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const files = e.target.files;
            if (files.length === 0) return;

            for (let file of files) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    createCard(event.target.result, previewGallery);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // 3. 灯箱逻辑
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) closeBtn.onclick = () => lightbox.style.display = 'none';
    if (lightbox) lightbox.onclick = (e) => { if(e.target === lightbox) lightbox.style.display = 'none'; };
});
