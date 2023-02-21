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
        centeredSlides: true,
        freeMode: true,
        initialSlide: 3,
        spaceBetween: 53,
        breakpoints: {
            320: {
                slidesPerView: 4,
                spaceBetween: 35
            },
            768: {
                slidesPerView: 4.3,
                spaceBetween: 53
            },
            1024: {
                slidesPerView: 7.8,
            }
        }
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
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 13
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });
    });
}

const menuCatalogBtn = document.getElementById('js-menu-catalog')
menuCatalogBtn.addEventListener('click', menuCatalog)

function menuCatalog(){
    const target = this;
    const overlay = document.querySelector('.wrp__overlay');
    const menuCatalog = document.querySelector('.menu-catalog');
    if(this.classList.contains('active')){
        this.classList.remove('active')
        overlay.classList.remove('active')
        menuCatalog.classList.remove('active')
    }else{
        this.classList.add('active')
        overlay.classList.add('active')
        menuCatalog.classList.add('active')
    }
}
