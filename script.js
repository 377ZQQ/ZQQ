document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const fileInput = document.getElementById('fileInput');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // --- 第一步：定义你原本就有的作品 ---
    // 请确保这些图片真实存在于你的 img 文件夹中
    const initialImages = [
        'img/saber1.png',
        'img/saber2.png',
        'img/saber3.png',
        'img/saber4.png',
        'img/avemujica直播间.png' 
    ];

    // 渲染图片的通用函数
    function addImageToGallery(src, isNew = false) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        if (isNew) item.style.animation = 'fadeInUp 0.6s ease';

        const img = document.createElement('img');
        img.src = src;
        img.alt = "作品";
        
        item.onclick = () => {
            lightboxImg.src = src;
            lightbox.style.display = 'flex';
        };

        item.appendChild(img);
        
        // 如果是新上传的，放在最前面；原本有的按顺序排
        if (isNew) {
            gallery.prepend(item);
        } else {
            gallery.appendChild(item);
        }
    }

    // --- 第二步：网页启动时，自动加载初始图片 ---
    initialImages.forEach(path => {
        addImageToGallery(path);
    });

    // --- 第三步：处理用户点击“上传”后的逻辑 ---
    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        for (let file of files) {
            const reader = new FileReader();
            reader.onload = (event) => {
                addImageToGallery(event.target.result, true);
            };
            reader.readAsDataURL(file);
        }
    });

    // 灯箱关闭逻辑
    document.querySelector('.close-btn').onclick = () => lightbox.style.display = 'none';
    lightbox.onclick = (e) => { if(e.target === lightbox) lightbox.style.display = 'none'; };
});
