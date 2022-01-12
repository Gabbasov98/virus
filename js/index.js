function sliderCatalog() {
    var swiper = new Swiper('.slider .swiper-container', {
        autoplay: true,
        scrollbar: {
            el: '.slider .swiper-scrollbar',
            draggable: true,
        },
    })
}

function sliderSystem() {
    var swiper = new Swiper('.system .swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: '.system .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}


function sliderEffect1() {
    var swiper = new Swiper('.effect__slider1 .swiper-container', {
        slidesPerView: 2.5,
        spaceBetween: 20,
        navigation: {
            nextEl: '.effect__slider-nav1  .swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.effect__slider-nav1 .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            420: {
                slidesPerView: 2,
            },
            550: {
                slidesPerView: 2.5,
            },
            600: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView: 2,
            },
            1366: {
                slidesPerView: 2.5,
            },
        }
    })
}

function sliderEffect2() {
    var swiper = new Swiper('.effect__slider2 .swiper-container', {
        slidesPerView: 2.5,
        spaceBetween: 20,
        navigation: {
            nextEl: '.effect__slider-nav2  .swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.effect__slider-nav2 .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            420: {
                slidesPerView: 2,
            },
            550: {
                slidesPerView: 2.5,
            },
            600: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView: 2,
            },
            1366: {
                slidesPerView: 2.5,
            },
        }
    })
}

function sliderEffect3() {
    var swiper = new Swiper('.effect__slider3 .swiper-container', {
        slidesPerView: 2.5,
        spaceBetween: 20,
        navigation: {
            nextEl: '.effect__slider-nav3  .swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.effect__slider-nav3 .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            420: {
                slidesPerView: 2,
            },
            550: {
                slidesPerView: 2.5,
            },
            600: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView: 2,
            },
            1366: {
                slidesPerView: 2.5,
            },
        }
    })
}

function sliderEffect4() {
    var swiper = new Swiper('.effect__slider4 .swiper-container', {
        slidesPerView: 2.5,
        spaceBetween: 20,
        navigation: {
            nextEl: '.effect__slider-nav4  .swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.effect__slider-nav4 .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            420: {
                slidesPerView: 2,
            },
            550: {
                slidesPerView: 2.5,
            },
            600: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView: 2,
            },
            1366: {
                slidesPerView: 2.5,
            },
        }
    })
}

function sliderEffect5() {
    var swiper = new Swiper('.effect__slider5 .swiper-container', {
        slidesPerView: 2.5,
        spaceBetween: 20,
        navigation: {
            nextEl: '.effect__slider-nav5  .swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.effect__slider-nav5 .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            420: {
                slidesPerView: 2,
            },
            550: {
                slidesPerView: 2.5,
            },
            600: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView: 2,
            },
            1366: {
                slidesPerView: 2.5,
            },
        }
    })
}








$(document).ready(function() {
    sliderCatalog()
    sliderEffect1()
    sliderEffect2()
    sliderEffect3()
    sliderEffect4()
    sliderEffect5()


    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (   )    -    ' });

    $(".qa__item-show").click(function() {
        $(this).siblings(".qa__item-hidden").slideToggle()
        $(this).parents(".qa__item").toggleClass("qa__item--active")
    })

    $(".effect__item").click(function() {
        $(".effect__item").removeClass("effect__item--active")
        $(this).addClass("effect__item--active")
        let path = $(this).attr("data-tab-path")
        $(".effect__slider-content").removeClass("effect__slider-content--active")
        $(`.effect__slider-content[data-tab-content="${path}"]`).addClass("effect__slider-content--active")
        $(".effect__slider-nav").removeClass("effect__slider-nav--active")
        $(`.effect__slider-nav[data-nav-path="${path}"]`).addClass("effect__slider-nav--active")
            // sliderEffect1()
            // sliderEffect2()
            // sliderEffect3()
            // sliderEffect4()
            // sliderEffect5()
    })


    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $("body").toggleClass("fixed-body")
        $(".menu").toggleClass("menu--active")

    })

    $(".menu__item").click(function() {
        if (window.innerWidth < 992) {
            $(".header__burger").removeClass("header__burger--active")
            $(".menu").removeClass("menu--active")
            $("body").removeClass("fixed-body")
        }

    })

    $(window).scroll(function() {
        var $sections = $('section');
        $sections.each(function(i, el) {
            var top = $(el).offset().top - 100;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var idn = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('.menu__item').removeClass('menu__item--active');
                $('.menu__item[href="#' + idn + '"]').addClass('menu__item--active');
            }
        });
    });








})