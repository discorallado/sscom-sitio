; (function () {

    'use strict';

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var fullHeight = function () {

        if (!isMobile.any()) {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function () {
                $('.js-fullheight').css('height', $(window).height());
            });
        }

    };

    // iPad and iPod detection
    var isiPad = function () {
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function () {
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    // Main Menu Superfish
    var mainMenu = function () {

        $('#fh5co-primary-menu').superfish({
            delay: 0,
            animation: {
                opacity: 'show'
            },
            speed: 'fast',
            cssArrows: true,
            disableHI: true
        });

    };

    var sliderMain = function () {

        $('#fh5co-hero .flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 9000,
            directionNav: true,
            start: function () {
                setTimeout(function () {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            },
            before: function () {
                setTimeout(function () {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            }

        });

        $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
        $(window).resize(function () {
            $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
        });

    };

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    // Slider
    var slider = function () {
        $('.slide-track').slick({
            // autoplay: true,
            // dots: false,
            // infinite: true,
            // slidesToShow: 5,
            // slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 250,
            // centerMode: true,
            // variableWidth: true,
            prevArrow: '',
            nextArrow: '',
            // speed: 2000,
            // autoplay: true,
            // autoplaySpeed: 0,
            // cssEase: 'linear',
            // slidesToShow: 1,
            // slidesToScroll: 1,
            variableWidth: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 8000,
            pauseOnHover: false,
            cssEase: 'linear',
        });
    }

    // Offcanvas and cloning of the main menu
    var offcanvas = function () {

        var $clone = $('#fh5co-menu-wrap').clone();
        $clone.attr({
            'id': 'offcanvas-menu'
        });
        $clone.find('> ul').attr({
            'class': '',
            'id': ''
        });

        $('#fh5co-page').prepend($clone);

        // click the burger
        $('.js-fh5co-nav-toggle').on('click', function () {

            if ($('body').hasClass('fh5co-offcanvas')) {
                $('body').removeClass('fh5co-offcanvas');
            } else {
                $('body').addClass('fh5co-offcanvas');
            }
            // $('body').toggleClass('fh5co-offcanvas');

        });

        $('#offcanvas-menu').css('height', $(window).height());

        $(window).resize(function () {
            var w = $(window);


            $('#offcanvas-menu').css('height', w.height());

            if (w.width() > 769) {
                if ($('body').hasClass('fh5co-offcanvas')) {
                    $('body').removeClass('fh5co-offcanvas');
                }
            }

        });

    }
    // Click outside of the Mobile Menu
    var mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('fh5co-offcanvas')) {
                    $('body').removeClass('fh5co-offcanvas');
                }
            }
        });
    };
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            el.addClass('fadeInUp animated');
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '85%' });
    };
    // Window Scroll
    var windowScroll = function () {
        var lastScrollTop = 0;

        $(window).scroll(function (event) {
            var header = $('#fh5co-header-section'),
                scrlTop = $(this).scrollTop();
            if (scrlTop > 100 && scrlTop <= 2000) {
                header.addClass('navbar-fixed-top animated slideInDown');
            } else if (scrlTop <= 100) {
                if (header.hasClass('navbar-fixed-top')) {
                    header.removeClass('navbar-fixed-top animated slideInDown slideOutDown')
                }
            }
        });
    };
    // Document on load.
    $(function () {
        mainMenu();
        offcanvas();
        // parallax();
        slider();
        mobileMenuOutsideClick();
        contentWayPoint();
        sliderMain();
        fullHeight();
        windowScroll();


    });


}());
