@@include('./partials/jquery.min.js')
@@include('./partials/swiper-bundle.min.js')
@@include('./partials/jquery.formstyler.min.js')
@@include('./partials/remodal.js')


const swiperMain = new Swiper('.swiper-main', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
    },
})

const swiperBrands = new Swiper('.swiper-brands', {
    slidesPerView: 7.8,
    spaceBetween: 53,
    pagination: {
        el: '.swiper-pagination',
    },
})