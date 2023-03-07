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
if(document.querySelector('.swiper-products')){
    const swiperThumbs = new Swiper(".swiper-thumbs", {
        direction: 'vertical',
        slidesPerView: 5,
        spaceBetween: 20,
        observer: true,
        slideToClickedSlide: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        watchOverflow:false,
        virtualTranslate: true
    });
    const swiperMain = new Swiper(".swiper-main", {
        slidesPerView: 1,
        spaceBetween: 20,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        initialSlide: 0,
        centeredSlides: true,
        centeredSlidesBounds: true,
        observer: true,
        thumbs: {
            swiper: swiperThumbs
        },
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
function expand(){
    const showExpands = document.querySelectorAll('.show-expand');

    if(showExpands.length){
        for (let showExpand of showExpands){
            const more = showExpand.querySelector('.show-expand__more');
            const body = showExpand.querySelector('.show-expand__body');
            const bodyHeight = body.clientHeight;
            console.log(bodyHeight)
            if(bodyHeight > 248){
                body.classList.add('height')
            }else{
                more.classList.add('d-none')
            }
            more.addEventListener('click', function (){
                body.classList.remove('height')
                more.classList.add('d-none')
            })
        }
    }
}

/*Юоковое меню*/
const menuAsides = document.querySelectorAll('.menu-aside')
for (let menuAside of menuAsides){
    menuAside.addEventListener('click', function (e){
        const target = e.target;
        const dropdown = target.nextElementSibling;
        if(dropdown){
            e.preventDefault();
            target.classList.toggle('active')
            dropdown.classList.toggle('active')
            console.log(target, dropdown)
        }
    })
}
/*Конец бокоое меню*/

$(function (){
    setTimeout(function() {
        $('.js-select').styler();
    }, 100)

    $('.js-open-org').on('click', function (){
        $(this).remove()
        $('.order__search').addClass('active')
    })

    $('.js-input-org').on('keyup', function (){
        if($(this).val()){
            $('.search-order__dropdown').addClass('active')
        }else{
            $('.search-order__dropdown').removeClass('active')
        }
    })

    $('.tabs .tabs__caption li').on('click', function(){
        let name = $(this).children('a').attr('href');
        if(!$(this).hasClass('active')){
            $('.tabs li').removeClass('active');
            $(this).addClass('active');

            $('.tabs__content').removeClass('active');
            $(name).addClass('active');
        }
    });

    $('.menu-catalog-mobile__item').on('click', function (e){
        let target = $(this);
        let dropdown = target.children('.menu-catalog-mobile__dropdown');
        console.log(target)
        console.log(dropdown)
        if(dropdown){
            dropdown.addClass('active')
            return false;
        }else{
            console.log('2')
        }
    })

})