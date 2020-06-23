$(document).ready(function () {
    $('.collapse > h2 >span').click(function (e) { 
        // e.preventDefault();
        // $('.collapse > div').slideUp();
        // $(this).parent().next().slideToggle();
        // $('.collapse > h2 >span').html('+');
        // $(this).html('-');
        e.preventDefault();
        $('.collapse > div').slideUp();
        //$(this).parent().next().slideToggle();

        //change switch + / -
        //$(this).html('-');
        let currentText = $(this).text()
        $('.collapse > h2 >span').html('+');
        //3RST METHODE
        //currentText == '-' ? $(this).text('+') : $(this).text('-') ;
        //$(this).text() == '-' ? $(this).parent().next().slideDown() : $(this).parent().next().slideUp() ;
        

        //OR USING CHAIN METHODS ON JQUERY
        currentText == '-' ? $(this).text('+').parent().next().slideUp() : $(this).text('-').parent().next().slideDown() ;

        //2ND METHODE: USING NORMAL IF STATEMENT
        // if (currentText == '-') {
        //     $(this).text('+').parent().next().slideUp()
        // } else {
        //     $(this).text('+').parent().next().slideDown()
        // }  
        
    });
});