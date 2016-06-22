$(document).ready(function () {
    $("[data-toggle='popover']").popover();
});
$(window).on("resize", function () {
    var currSrc = $(".pwc-navbar-big .pwc-logo-image").attr("src");
    if ($(this).width() <= 767 && $(".pwc-navbar-big .pwc-logo-image").length) {
        $(".pwc-navbar-big .pwc-logo-image").attr({
            "src": currSrc.substring(0, currSrc.lastIndexOf('/')) + "/onecolor-seal-95-web-white.png",
            "height": 95
        });
    }
    else if ($(this).width() > 767 && $(".pwc-navbar-big .pwc-logo-image").length) {
        $(".pwc-navbar-big .pwc-logo-image").attr({
            "src": currSrc.substring(0, currSrc.lastIndexOf('/')) + "/color-seal-95-web.png",
            "height": 95
        });
    }
});
$("[data-toggle=offcanvas]").click(function () {
    //$(this).closest(".pwc-offcanvas-nav-wrapper").toggleClass("active");
    $(".pwc-offcanvas-content-wrapper, .pwc-offcanvas-nav-wrapper").toggleClass("active");
});
$(".pwc-accordion .panel-collapse").on("shown.bs.collapse", function () {
    $(this).prev().find(".glyphicon").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");
});
$(".pwc-accordion .panel-collapse").on("hidden.bs.collapse", function () {
    $(this).prev().find(".glyphicon").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");
});