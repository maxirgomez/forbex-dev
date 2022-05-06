document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        width: '100%',
        position: 'center',
        autoplay: true,
        speed: 800,
        interval: 2000,
        pauseOnHover: false,
    }).mount();
});