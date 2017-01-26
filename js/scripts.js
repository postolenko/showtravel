$(document).ready(function() {


    var windowHeight;
    var windowWidt;


    getPopupPosition();

    getServicesLeftColBg();

    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ----------------------------------------------------------------------------

        getServicesLeftColBg();

        // ----------------------------------------------------------------------------


        $(".show_attractions_bg").css({"bottom" : $(".footer").outerHeight() + "px"});

        // -----------------------------------------------------------------------------

        getPopupPosition();

        getServicesLeftColBg();

    });

    // ----------------------------------------------------------------------------------

    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });

    // ----------------------------------------------------------------------------------

    var countCircleTooltip = $(".circle-tooltip").length - 1;

    // console.log(countCircleTooltip);

    var indexCircleTooltip = 0;

    var circleTooltipContentHeight;

    // for( indexCircleTooltip = 0; indexCircleTooltip <= countCircleTooltip; countCircleTooltip++ ) {

        circleTooltipContentHeight = $(".circle-tooltip:eq("+ indexCircleTooltip +") .tooltip-content").height();

        $(".circle-tooltip:eq("+ indexCircleTooltip +") .tooltip-content").css({
                                                                                "height" : circleTooltipContentHeight + "px",
                                                                                "top" : 145 / 2 + "px"
                                                                            });

        $(".circle-tooltip:eq("+ indexCircleTooltip +")").css({
                                                "height" : circleTooltipContentHeight + 145 + "px",
                                                "width" : circleTooltipContentHeight + 145 + "px"
                                            });

    // }


    // ----------------------------------------------------------------------------------

    $(function() {

        $(".switch-lg-btn").click(function() {

            if( $(".lg-list").is(":hidden") ) {

                $(".lg-list").fadeIn(300);

            } else {

                $(".lg-list").fadeOut(300);

            }


        });

        $(document).mouseup(function (e){

            hide_element = $(".lg-list");

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                hide_element.fadeOut(300);

                $(".lg-list").removeClass("active");
            }

        });


    });

    // ----------------------------------------------------------------------------------

    $(function() {

        $(".popups-bg, .close-popup").click(function() {

            $(".popups-bg").fadeOut(300);

            $(".popup-box").fadeOut(300);

        });

    });


    $(function() {

        var srcAttrVideo;

        $(".video-thumb").click(function(videoLinkEvent) {

            videoLinkEvent.preventDefault();

            srcAttrVideo = $(this).attr("data-video-link");

            $(".popup-video-wrapp").fadeIn(300);      

            $(".popup-video iframe").attr("src", srcAttrVideo + "?enablejsapi=1");

            getPopupPosition();

        });

        $(".popup-video-wrapp .close-video-popup, .popup-video-wrapp .video-popup-bg").click(function() {

            $(".popup-video iframe").attr("src", srcAttrVideo + "?enablejsapi=1");

            document.getElementById('video-iframe').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');

            $(".popup-video iframe").attr("src", "");

            setTimeout(function() {

                $(".popup-video-wrapp").fadeOut(300);

            }, 300);

        });

    });

    // ----------------------------------------------------------------------------------

    $(function() {

        var activeLinkAttr;

        var linkAttr;

        var serviceLinkCount = $(".service-link").length - 1;

        var serviceLinkIndex = 0;

        for(serviceLinkIndex = 0; serviceLinkIndex <= serviceLinkCount; serviceLinkIndex++) {

            if( $(".service-link:eq(" + serviceLinkIndex + ")").hasClass("active") ) {

                $(".service-content").css({"display" : "none"});

                activeLinkAttr = $(".service-link:eq(" + serviceLinkIndex + ")").attr("data-link");

                $('[data-service = "content_' + activeLinkAttr + '"]').addClass("active");

                $('[data-service = "content_' + activeLinkAttr + '"]').css({"display" : "block"});

            }

        }


        $(".service-link").click(function(serviceLink) {

            serviceLink.preventDefault();

            linkAttr = $(this).attr("data-link");

            if( $(".service-content:visible").attr("data-service") != "content_" + linkAttr ) {

                $(".service-content:visible").css({"display" : "none"});

                $(".service-link").removeClass("active");

                $('[data-service = "content_'+ linkAttr + '"]').css({"display" : "block"});

                $(this).addClass("active");

            }

        });

    });


    // ----------------------------------------------------------------------------------

    $(function() {

        $(".upl-file-btn").click(function() {

            $("input.upload-inpt").click();

        });

    });

    // ----------------------------------------------------------------------------------

    $(function() {

        $(".show_attractions_bg").css({"bottom" : $(".footer").outerHeight() + "px"});

    });

    // ----------------------------------------------------------------------------------

    $(function() {

        var tabLinkAttr;

        $(".tab-link").click(function() {

            $(".tab-link").removeClass("active");

            $(this).addClass("active");

        });

    });

    // ----------------------------------------------------------------------------------

    var countCircleDiagram = $(".diagram-box").length- 1;
    var circleDiagramIndex;
    var circleDiagramTxt;



    for(circleDiagramIndex = 0; circleDiagramIndex <= countCircleDiagram; circleDiagramIndex++) {

        circleDiagramTxt = $(".diagram-box:eq("+ circleDiagramIndex +") .diagram-txt").html();

        $(".diagram-box:eq("+ circleDiagramIndex +") .circles-text").html(circleDiagramTxt);

    }


    // ---------------------------------------

    function getPopupPosition() {

        var windowHeight = $(window).height();
        var windowWidth = $(window).width();

        $(".popup-position").css({  "top" :  ( windowHeight - $(".popup-position").outerHeight(true) ) / 2 + "px",
                                    "left" : ( windowWidth - $(".popup-position").outerWidth(true) ) / 2 + "px" 
                                });

    }


    // -----------------------------------------------------------------------------------

    function getServicesLeftColBg() {

        if( $(".services").length > 0 && $(".services .col-1 .services-white-bg").length <= 0 ) {

            $(".services .col-1").css({"min-height" : $(".services").height() + "px"})

            $(".services .col-1").prepend("<div class='services-white-bg'></div>");

            $(".services-white-bg").css({"width" : ( $(".services .col-1").offset().left + $(".services .col-1").width() ) + "px"});

        }

    }



});
