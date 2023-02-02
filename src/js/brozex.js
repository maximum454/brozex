@@include('./partials/jquery.min.js')
@@include('./partials/swiper-bundle.min.js')
@@include('./partials/jquery.formstyler.min.js')
@@include('./partials/remodal.js')

if(document.querySelector('.swiper-main')) {
    const swiperMain = new Swiper('.swiper-main', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
        },
    })
}

if(document.querySelector('.swiper-brands')) {
    const swiperBrands = new Swiper('.swiper-brands', {
        slidesPerView: 7.8,
        spaceBetween: 53,
    })
}

if(document.querySelector('.swiper-products')) {
    document.querySelectorAll('.slider-products').forEach(n => {
        const swiperProducts = new Swiper(n.querySelector('.swiper-products'), {
            slidesPerView: 4,
            spaceBetween: 20,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: n.querySelector('.swiper-button-next'),
                prevEl: n.querySelector('.swiper-button-prev'),
            },
        });
    });
}
