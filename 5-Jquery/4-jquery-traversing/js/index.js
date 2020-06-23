$(document).ready(function () {
    //get parent
    $('#btn1').click(function (e) {
        e.preventDefault();
        alert($('h2').parent().text())
    });

    //get children
    $('#btn2').click(function (e) {
        e.preventDefault();
        alert($('p').children().text()) //return the element child so it will return only the span not lorem

    });

    //get next element
    $('#btn3').click(function (e) {
        e.preventDefault();
        alert($('h2').next().text())

    });

    //get next element
    $('#btn4').click(function (e) {
        e.preventDefault();
        alert($('p').prev().text())

    });

    //get next element
    $('#btn5').click(function (e) {
        e.preventDefault();
        console.log($('span').parents()) //parents return an array of parents and grandParents so if we want to access to div we write parents()[1]
        console.log($('span').parentsUntil('body')) //get the parents until the body that mean it give only p and div 

    });
});