$(document).ready(function () {
    //add click event to btn1
    $('#btn1').click(function (e) { 
        e.preventDefault();
        $('#div1').addClass('redDiv');
    });

    //add click event to btn2
    $('#btn2').click(function (e) { 
        e.preventDefault();
        $('#div1').removeClass('redDiv');
    });

    //add click event to btn3
    $('#btn3').click(function (e) { 
        e.preventDefault();
        $('#div1').toggleClass('redDiv');
    });

    //add click event to btn4
    $('#btn4').click(function (e) { 
        e.preventDefault();
        
        console.log($('#div1').hasClass('redDiv')); //check if there is a class or not
        
    });

    //add click event to btn5
    $('#btn5').click(function (e) { 
        e.preventDefault();
        console.log($('#div1').css('background-color'));
        console.log($(window).width()); //get the width of the window
        
    });

    //add click event to btn6
    $('#btn6').click(function (e) { 
        e.preventDefault();
        console.log($('#div1').css('background-color'))
        $('#div1').css('background-color', 'pink');
        
    });

});