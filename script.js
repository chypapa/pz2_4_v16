const miniphotos = document.querySelectorAll('.miniphoto'); // Находим все миниатюры
const largePhoto = document.getElementById('large-photo'); // Находим большое изображение



miniphotos.forEach(miniphoto => {
    miniphoto.addEventListener('click', function() {
        
        miniphotos.forEach(img => img.classList.remove('active'));
        this.classList.add('active');
        const largeImageSrc = this.getAttribute('data-large');
        largePhoto.src = largeImageSrc;
    });
});
