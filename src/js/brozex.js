@@include('./partials/swiper-bundle.min.js')
@@include('./partials/jquery.formstyler.min.js')
@@include('./partials/remodal.js')
@@include('./partials/jquery.mask.js')

if(document.querySelector('.swiper-main')){
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
    const swiperThumbs = new Swiper(".swiper-detail-thumbs", {
        direction: getDirection(),
        slidesPerView: 5,
        spaceBetween: 20,
        observer: true,
        slideToClickedSlide: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        watchOverflow:true,
        virtualTranslate: true,
        on: {
            resize: function () {
                swiperThumbs.changeDirection(getDirection());
            }
        }
    });
    const swiperMain = new Swiper(".swiper-detail-main", {
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
function getDirection() {
    let windowWidth = window.innerWidth;
    let direction = window.innerWidth <= 1023 ? 'horizontal' : 'vertical';

    return direction;
}

const overlay = document.querySelector('.wrp__overlay');
overlay.addEventListener('click', function (){
    const target = this;
    const menuCatalog = document.querySelector('.menu-catalog');
    const headerCatalog = document.querySelector('.header-catalog');
    target.classList.remove('active')
    menuCatalog.classList.remove('active')
    headerCatalog.classList.remove('active')
})



/*Боковое меню*/
const menuAsides = document.querySelectorAll('.menu-aside__list')
for (let menuAside of menuAsides){
    menuAside.addEventListener('click', function (e){
        const target = e.target;
        const dropdown = target.nextElementSibling;
        if(dropdown){
            e.preventDefault();
            target.classList.toggle('active')
            dropdown.classList.toggle('active')
        }
    })
}
/*Конец бокоое меню*/

/*Боковое меню на мобиле*/
const menuAsidesCurrents = document.querySelectorAll('.menu-aside__current')
for (let currents of menuAsidesCurrents){
    currents.addEventListener('click', function (e){
        e.preventDefault();
        const target = e.target;
        const parent = target.closest('.menu-aside');
        if(parent){
            parent.classList.toggle('open')
        }
    })
}
/*Конец бокоое меню*/

/*Мобильное меню меню*/
const smartPanelCatalogBtn = document.querySelector('.js-menu-catalog-mobile')
smartPanelCatalogBtn.addEventListener('click', function (){
    let menu = document.querySelector('.menu-catalog-mobile');
    let menuOther = document.querySelector('.menu-more-mobile');
    menu.classList.toggle('active')
    menuOther.classList.remove('active')
    document.body.classList.toggle('lock')
})

const menuCatalogMobilesClose = document.querySelector('.menu-catalog-mobile__close')
menuCatalogMobilesClose.addEventListener('click', function (){
    let menu = document.querySelector('.menu-catalog-mobile');
    menu.classList.remove('active')
    document.body.classList.remove('lock')
})

const menuCatalogMobiles = document.querySelectorAll('.menu-catalog-mobile__list')
for (let catMobile of menuCatalogMobiles){
    catMobile.addEventListener('click', function (e){
        const target = e.target;
        const dropdown = target.nextElementSibling;
        console.log(target)
        console.log(dropdown)
        if(dropdown){
            e.preventDefault();
            target.classList.toggle('active')
            dropdown.classList.toggle('active')
        }
    })
}

/*Заголовок подменю назад*/
const menuCatalogMobilesPrevs = document.querySelectorAll('.menu-catalog-mobile__prev')
for (let prev of menuCatalogMobilesPrevs){
    prev.addEventListener('click', function (e){
        const target = e.target;
        const dropdown = target.closest('.menu-catalog-mobile__dropdown');
        if(dropdown){
            e.preventDefault();
            dropdown.classList.remove('active')
        }
    })
}
/*Конец мобильного меню*/

/**/
const smartPanelMoreBtn = document.querySelector('.js-menu-more-mobile')
smartPanelMoreBtn.addEventListener('click', function (){
    let menu = document.querySelector('.menu-more-mobile');
    let menuOther = document.querySelector('.menu-catalog-mobile');
    menu.classList.toggle('active')
    menuOther.classList.remove('active')
    document.body.classList.toggle('lock')
})
const menuMoreMobilesClose = document.querySelector('.menu-more-mobile__close')
menuMoreMobilesClose.addEventListener('click', function (){
    let menu = document.querySelector('.menu-more-mobile');
    menu.classList.remove('active')
    document.body.classList.remove('lock')
})
/**/



$(function (){
    setTimeout(function() {
        $('.js-select').styler();
    }, 100)

    /*$('.js-open-org').on('click', function (){
        $(this).remove()
       $(this).next('.order__search').addClass('active')
    })*/

    $('.js-input-org').on('keyup', function (){
        if($(this).val()){
            $('.search-order__dropdown').addClass('active')
        }else{
            $('.search-order__dropdown').removeClass('active')
        }
    })

    $('.form-control').on('focus', function (){
        $(this).parent('.form-label').addClass('focus')
    })
    $('.form-control').on('blur', function (){
        $(this).parent('.form-label').removeClass('focus')
    })

    $('.tabs .tabs__caption li').on('click', function(){
        let name = $(this).children('a').attr('href');
        if(!$(this).hasClass('active')){
            $('.tabs li').removeClass('active');
            $(this).addClass('active');

            $('.tabs__content').removeClass('active');
            $(name).addClass('active');
            expand()
        }
        return false;
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

    if ($('.form-auth__form .form-control').length > 0){
        formLabel($('.form-auth__form .form-control'))
    }

    if ($('.account__form .form-control').length > 0){
        formLabel($('.account__form .form-control'))
    }

    if($('.show-expand').length > 0) {
        expand()
    }



    $('.js-menu-catalog').on('click', function (){
        let overlay = $('.wrp__overlay');
        let menuCatalog = $('.menu-catalog');
        $(this).toggleClass('active')
        overlay.toggleClass('active')
        menuCatalog.toggleClass('active')
    })


})

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
    let showExpands = $('.show-expand');

    showExpands.each(function (){
        let parent = $(this)
        let more = parent.find('.show-expand__more');
        let body = parent.find('.show-expand__body');
        let bodyH = body.height();
        console.log(bodyH)
        if(bodyH >= 238){
            body.addClass('height')
            more.removeClass('d-none')
            more.on('click', function (){
                body.toggleClass('height')
                if(more.hasClass('active')){
                    more.removeClass('active')
                    more.html('<span>развернуть</span> <i class="icon icon-dropdown-bottom"></i>')
                }else{
                    more.addClass('active')
                    more.html('<span>Свернуть</span> <i class="icon icon-dropdown-bottom"></i>')
                }
            })
        }else{

        }
    })
}


function formLabel(formInput){
    formInput.each( function (){
        if(!$(this).val() == ''){
            $(this).parent('.form-group').find('.form-label').addClass('d-none')
        }
        let input = $(this)
        let label = input.parent('.form-group').find('.form-label')
        $(this).on('focus', function (){
            label.addClass('d-none')
        })
        $(this).on('blur', function (){
            if(!input.val()>0){
                label.removeClass('d-none')
            }
        })
    })
}