$(document).ready(function () {
    $(".example-tabs").tab();
    $("[data-toggle='popover']").popover();
    setSidebarWidth();
});
$("a[href='#']").click(function (e) {
    e.preventDefault();
});
$('a[href*="#"]:not([href="#"])').click(function () { /* For smooth scrolling */
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 750);
            return false;
        }
    }
});
/**
* Sets sidebar width
*/
function setSidebarWidth() {
    var sidebarWidth = 0;
    $("#sidebar").children().each(function () {
        if ($(this).outerWidth() > sidebarWidth) {
            sidebarWidth = $(this).outerWidth();
        }
    });
    $("#sidebar").css({ "width": sidebarWidth });
}