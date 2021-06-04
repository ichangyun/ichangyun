$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".cy_totop").fadeIn(200);
        } else {
            $(".cy_totop").fadeOut(200);
        }
    });

    $(".cy_totop").click(function () {
        $('body,html').animate({scrollTop: 0}, 200);
        return false;
    });
});
