window.onload = () => {
    let div1Touched = false
    let div2Touched = false

    let div1 = document.querySelector('.conatiner>div:nth-child(1)')
    let div2 = document.querySelector('.conatiner>div:nth-child(2)')

    div1.addEventListener("touchstart", function (e) {
        div1Touched = true
        check()

    });

    div1.addEventListener("touchend", function (e) {
        div1Touched = false



    });


    div2.addEventListener("touchstart", function (e) {
        div2Touched = true
        check()

    });

    div2.addEventListener("touchend", function (e) {
        div2Touched = false


    });

    function check() {

        if (div1Touched && div2Touched) {

            alert('both are touched')
            div1Touched = false
            div2Touched = false
        }
    }
}