$(document).ready(function () {

    $('.nav-li').hover(
        function () {//hover in
            $(this).children('.nav-ul-l2').slideDown(500);
        },
        function () {//hover out
            $(this).children('.nav-ul-l2').slideUp(200);
        }
    );
});