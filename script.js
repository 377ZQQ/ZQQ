document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 【修改这里】：把你的图片文件名填在下面这个列表里
    // 确保这些图片已经在你的 img 文件夹中
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

    // 通用渲染函数
    function createCard(src, container) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${src}" alt="Art">`;
        
        item.onclick = () => {
            lightboxImg.src = src;
            lightbox.style.display = 'flex';
        };
        
        container.appendChild(item);
    }

    // 1. 初始化展示已有图片
    myExistingWorks.forEach(path => {
        createCard(path, staticGallery);
    });

    // 2. 处理图片上传预览
    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        for (let file of files) {
            const reader = new FileReader();
            reader.onload = (event) => {
                createCard(event.target.result, previewGallery);
            };
            reader.readAsDataURL(file);
        }
    });

    // 3. 灯箱关闭
    document.querySelector('.close-btn').onclick = () => lightbox.style.display = 'none';
    lightbox.onclick = (e) => { if(e.target === lightbox) lightbox.style.display = 'none'; };
});
