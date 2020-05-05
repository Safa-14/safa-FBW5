$(document).ready(function () {
    $('#btn1').click(function (e) {
        e.preventDefault()
        $('.div1').fadeIn(2000)//fi nafs el blasa todhhor bechwaya 5terha knet display none
    })
    $('#btn2').click(function (e) {
        e.preventDefault()
        $('.div1').fadeOut(2000)
    })

    $('.collapseTitle>a').click(function (e) {
        e.preventDefault()
        $('.collapseContent').slideToggle(1000)
        
    })
})

//kif yabda 3ana display none w n7ebou ndahhrou on click nesta3mlou fadein