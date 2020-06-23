$(document).ready(function () {
    $('#btn1').click(function (e) { 
        e.preventDefault();
        //width() return the element width without padding, border, margin etc
        alert($('.someDiv').width() + ' X ' + $('.someDiv').height())
        //$('.someDiv').width('100px');
    });

    $('#btn2').click(function (e) { 
        e.preventDefault();
        //innerWidth is the div width + padding
        alert($('.someDiv').innerWidth() + ' X ' + $('.someDiv').innerHeight())
        
    });
});