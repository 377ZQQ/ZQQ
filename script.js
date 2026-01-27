document.addEventListener('DOMContentLoaded', () = {
    const gallery = document.getElementById('gallery');
    const fileInput = document.getElementById('fileInput');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

     1. 初始图片列表 (确保你的 img 文件夹里有这些文件)
     如果你只有4张图，就删掉最后一个
    const initialImages = [
        'imgsaber1.png',
        'imgsaber2.png',
        'imgsaber3.png',
        'imgsaber4.png'
    ];

     渲染单个图片卡片的函数
    function renderImage(src, isNew = false) {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        if (isNew) {
            item.classList.add('newly-added');  添加进入动画
        }

        const img = document.createElement('img');
        img.src = src;
        img.alt = Anime Art;
        img.loading = lazy;  懒加载，提升性能

         点击图片打开灯箱
        item.addEventListener('click', () = {
            openLightbox(src);
        });

        item.appendChild(img);
         新上传的图片插在最前面
        if (isNew) {
            gallery.insertBefore(item, gallery.firstChild);
        } else {
            gallery.appendChild(item);
        }
    }

     加载初始图片
    initialImages.forEach(src = {
        renderImage(src);
    });


     2. 处理上传预览功能
    fileInput.addEventListener('change', function(e) {
        const files = e.target.files;
        if (files.length === 0) return;

         遍历用户选择的所有文件
        for (let i = 0; i  files.length; i++) {
            const file = files[i];
            
             确保是图片类型
            if (!file.type.startsWith('image')) {
                continue; 
            }

             使用 FileReader 读取本地文件
            const reader = new FileReader();
            reader.onload = function(event) {
                 event.target.result 就是图片的 Base64 编码数据
                 我们可以直接用它作为 img 的 src
                renderImage(event.target.result, true);
            }
             开始读取
            reader.readAsDataURL(file);
        }
         清空输入框，确保下次选择相同文件还能触发 change 事件
        fileInput.value = '';
    });


     3. 灯箱控制函数
    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';  禁止背景滚动
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';  恢复背景滚动
    }

     关闭按钮点击
    closeBtn.addEventListener('click', closeLightbox);

     点击灯箱背景也可以关闭
    lightbox.addEventListener('click', (e) = {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});