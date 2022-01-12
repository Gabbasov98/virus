function sliderCatalog() {
    var swiper = new Swiper('.slider .swiper-container', {
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
                slidesPerView: 1,
                spaceBetween: 20
            },
            600: {
                slidesPerView: 2,
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
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 2.5,
                spaceBetween: 20
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
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 2.5,
                spaceBetween: 20
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
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 2.5,
                spaceBetween: 20
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
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
        }
    })
}








$(document).ready(function() {
    sliderCatalog()
    sliderSystem()
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
        sliderEffect1()
        sliderEffect2()
        sliderEffect3()
        sliderEffect4()
        sliderEffect5()
    })

    $(".menu-mob").click(function() {
        $(this).toggleClass("menu-mob--active")
        $(".menu").toggleClass("menu--active")
        $("body").toggleClass("fixed-body")
    })

    $(".menu__item").click(function() {
        if (window.innerWidth < 992) {
            $(this).removeClass("menu-mob--active")
            $(".menu").removeClass("menu--active")
            $("body").removeClass("fixed-body")
        }

    })

    // $(".menu").on("click", "a", function(event) {
    //     // исключаем стандартную реакцию браузера
    //     event.preventDefault();

    //     // получем идентификатор блока из атрибута href
    //     var idc = $(this).attr('href'),

    //         // находим высоту, на которой расположен блок
    //         top = $(idc).offset().top;

    //     // анимируем переход к блоку, время: 800 мс
    //     $('body,html').animate({ scrollTop: top }, 100);
    // });
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




    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header").toggleClass("header--active")
        $(".nav").toggleClass("nav--active")
        $("body").toggleClass("fixed-body")

    })

    $(".blog__btn").click(function() {
        $(this).toggleClass("blog__btn--active")
        $(".blog__hidden").slideToggle()
    })



    $(".catalog-scheme__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".catalog-scheme__tab").removeClass('catalog-scheme__tab--active')
        $(this).addClass('catalog-scheme__tab--active')
        console.log(path)
        $(".catalog-scheme__content").removeClass("catalog-scheme__content--active")
        $(`.catalog-scheme__content[data-tab-content="${path}"]`).addClass("catalog-scheme__content--active")
        gallery2()
        gallery3()
    })


    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $(".header").addClass("header--active")
        } else {
            $(".header").removeClass("header--active")
        }
    });
})