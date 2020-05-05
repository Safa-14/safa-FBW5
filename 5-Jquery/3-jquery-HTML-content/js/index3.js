$(document).ready(function () {
    $('.collapse > h2 >span').click(function (e) { 
        e.preventDefault();
        $('.collapse > div').slideUp();
        $(this).parent().next().slideToggle();
        $('.collapse > h2 >span').html('+');
        $(this).html('-');
        
    });
});