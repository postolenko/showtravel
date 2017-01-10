$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });


    getPopupPosition();

    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ----------------------------------------------------------------------------

        getPopupPosition();

    });

    // ----------------------------------------------------------------------------------

    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });

    // ----------------------------------------------------------------------------------

    $(function() {

        $(".switch-lg-btn, .lg-link").click(function() {

            $(".lg-list").toggleClass("active");

        });

        // $("*").click(function() {

        //     if( $(this).hasClass("lg-list") ) {

        //         return false;

        //     } else {

        //         $(".lg-list").removeClass("active");

        //     }

        // });

    });

    // ----------------------------------------------------------------------------------

    // $(function() {

    //     $(".popups-bg, .close-popup").click(function() {

    //         $(".popups-bg").fadeOut(300);

    //         $(".popup-box").fadeOut(300);

    //     });

    // });

    // ----------------------------------------------------------------------------------


    function getPopupPosition() {

        var windowHeight = $(window).height();
        var windowWidth = $(window).width();

        $(".popup-position").css({  "top" :  ( windowHeight - $(".popup-position").outerHeight(true) ) / 2 + "px",
                                    "left" : ( windowWidth - $(".popup-position").outerWidth(true) ) / 2 + "px" 
                                });

    }



});
