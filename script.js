document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const fileInput = document.getElementById('fileInput');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // 处理图片上传预览
    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        for (let file of files) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                item.innerHTML = `<img src="${event.target.result}">`;
                item.onclick = () => {
                    lightboxImg.src = event.target.result;
                    lightbox.style.display = 'flex';
                };
                gallery.prepend(item);
            };
            reader.readAsDataURL(file);
        }
    });

    document.querySelector('.close-btn').onclick = () => lightbox.style.display = 'none';
});
