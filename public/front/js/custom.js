// Fixed Header Start
$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixedHeader');
    } else {
        $('.header').removeClass('fixedHeader');
    }
});
// Fixed Header End

// Sidebar Start
$('.navbar-toggler').on('click', function () {
if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
    $('.navbar-expand-md .navbar-collapse').css('top', '-100%');
} else {
    $('.navbar-expand-md .navbar-collapse').css('top', '0px');
}
});
// Sidebar End

// Navbar Button Style Start
$(document).ready(function(){
$('.navbar-toggler').click(function(){
    if($(this).hasClass('active'))
    {
        $(this).removeClass('active')
    }
    else{
        $(this).addClass('active')
    }
});
});
// Navbar Button Style End

// Hide Show mobile view our services start
$(document).ready(function(){
    $('.listDropDown').on('click', function(){
        if($(this).parents('.ourSolMobileList').hasClass('activeBox')){
            $(this).parents('.ourSolMobileList').removeClass('activeBox');
            $(this).parents('.ourSolMobileList').find('.servicesMobList').slideUp();
            $(this).parents('.ourSolMobileList').find('span i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
        else{
            $('.listDropDown').parents('.ourSolMobileList').removeClass('activeBox');
            $('.listDropDown').parents('.ourSolMobileList').find('.servicesMobList').slideUp();
            $('.listDropDown').parents('.ourSolMobileList').find('span i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            $(this).parents('.ourSolMobileList').addClass('activeBox');
            $(this).parents('.ourSolMobileList').find('.servicesMobList').slideDown();
            $(this).parents('.ourSolMobileList').find('span i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        }
    })
})

// Hide Show mobile view our services end

// Recent Post Slider Start
$().ready(function(){
    $('.recentBlogSlider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 1
                }
            }]
    });
});


// Trusted by Slider Start

$().ready(function(){
    $('.trustedSlider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        slidesToShow: 6,
        infinite: false,
        responsive: [
            {
                breakpoint: 1561,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 2
                }
            }]
    });
});

// Blog Details Recent Blogs Slider Start

$('.slick').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

// Blog Details Recent Blogs Slider End

// Share Like Box Design Start

$(document).ready(function(){
    $('.shareLikeBox .shareLink').on('click', function(){
        $(this).parents('span').toggleClass('active');
    });

    $(document).on("click", function (event) {
        var $trigger = $(".shareLinkBtn");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $('.shareLink').parents('span').removeClass('active');
            // $('.shareLikeBox .shareLink').parents('span').find('.shareDropdown').slideUp();
        }
    });
});

$(document).ready(function(){
    $('.shareLikeBox .likeLink').on('click', function(){
        $(this).toggleClass('active');
    });
});

// Share Like Box Design End