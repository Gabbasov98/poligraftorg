$(document).ready(function() {
    $(".header__catatlog-btn").click(function() {
        $(this).addClass("header__catatlog-btn--active")
        $(".header-catalog").addClass("header-catalog--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.header-catalog');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".header-catalog").hasClass("header-catalog--active")) {
                $(".header-catalog").removeClass("header-catalog--active")
                $(".header__catatlog-btn").removeClass("header__catatlog-btn--active")
            }
        }
    });

    $(".header-catalog__item-show").click(function() {
        if ($(this).parents(".header-catalog__item").hasClass("header-catalog__item--active")) {
            $(".header-catalog__item").removeClass("header-catalog__item--active")
        } else {
            $(".header-catalog__item").removeClass("header-catalog__item--active")
            $(this).parents(".header-catalog__item").addClass("header-catalog__item--active")
        }
    })


    $(".header-catalog__link").mouseover(function() {
        $(".header-catalog__img").removeClass("header-catalog__img--active")
        $(this).siblings(".header-catalog__img").addClass("header-catalog__img--active")
    });

    $(".header-catalog__link").mouseout(function() {
        $(".header-catalog__img").removeClass("header-catalog__img--active")
    });

    $(".header__search-btn").click(function() {
        $(this).siblings("input").toggleClass("input--active")
    })
})