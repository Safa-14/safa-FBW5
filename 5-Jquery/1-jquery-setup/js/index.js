//$(selector).methode()
//alternative window.onload
$(document).ready(function () {
    // $('.someDiv').hide()
    // $('.someDiv').show()
    //addevent to btn1
    $("#btn1").click(function () {
        //show or hide the content
        $('.someDiv').toggle(500);
        //check btn1 content to set the right text
        if ($(this).text() == 'hide') {
            $(this).text('show')
        } else {
            $(this).text('hide')
        }
    });

})

//different way
$(function () {

})