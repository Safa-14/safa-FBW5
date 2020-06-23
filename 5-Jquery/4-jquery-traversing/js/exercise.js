// $(window).resize(function () {
//     let width = $(window).width();


//     if ((width <= 500)) {

//         $('nav>ul').fadeOut()
//         $('nav>div>div').fadeIn().click(function (e) {
//             e.preventDefault();
//             $('nav>ul').slideToggle();
//         });
//     }else {
//         $('nav>ul').fadeIn()
//         $('nav>div>div').fadeOut()
//     }


// });

$(document).ready(function () {
    $('nav>div>div').click(function (e) {
        e.preventDefault();
        $('nav>ul').slideToggle();
    });

    $(window).resize(function () {

            if ($('nav').width() >= 500) {

                $('nav>ul').fadeIn()

            }else {
                $('nav>ul').fadeOut()
            }
    });
});