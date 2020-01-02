$(document).ready(function () {
    $(window).scroll(function () {
        var y = $(this).scrollTop();

        $('nav ul li a').each(function (event) {
            if (y >= $($(this).attr('href')).offset().top - 90) {
                $('nav ul li a').not(this).removeClass('current');
                $(this).addClass('current');
            }
        });
    });
});