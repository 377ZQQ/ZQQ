document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const fileInput = document.getElementById('fileInput');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    const initialImages = [
        'img/saber1.png',
        'img/saber2.png',
        'img/saber3.png',
        'img/saber4.png'
    ];

    function addImageToGallery(src, delay = 0) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.animationDelay = `${delay}s`;

        const img = document.createElement('img');
        img.src = src;
        img.alt = '作品';

        item.addEventListener('click', () => {
            lightboxImg.src = src;
            lightbox.classList.add('active');
        });

        item.appendChild(img);
        gallery.appendChild(item);
    }

    initialImages.forEach((src, i) => {
        addImageToGallery(src, i * 0.08);
    });

    fileInput.addEventListener('change', e => {
        [...e.target.files].forEach(file => {
            const reader = new FileReader();
            reader.onload = ev => addImageToGallery(ev.target.result, 0);
            reader.readAsDataURL(file);
        });
    });

    closeBtn.onclick = () => lightbox.classList.remove('active');
    lightbox.onclick = e => {
        if (e.target === lightbox) lightbox.classList.remove('active');
    };
});
