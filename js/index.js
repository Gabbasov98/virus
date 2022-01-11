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


function sliderEffect() {
    var swiper = new Swiper('.effect .swiper-container', {
        slidesPerView: 2.5,
        spaceBetween: 20,
        navigation: {
            nextEl: '.effect  .swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.effect .swiper-pagination',
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
    sliderEffect()


    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (   )    -    ' });

    $(".qa__item-show").click(function() {
        $(this).siblings(".qa__item-hidden").slideToggle()
        $(this).parents(".qa__item").toggleClass("qa__item--active")
    })



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