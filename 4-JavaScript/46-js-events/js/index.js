window.onload = () => {
    //get html btn
    const btn = document.querySelector('#btn1')
    //add a click event to btn
    btn.addEventListener('click', e => {
        console.log(e);

    })
    //get container elt add a click event to container
    let container = document.querySelector('#container')
    container.onclick = (e) => {
        console.log(e.clientX, e.clientY);

    }
    //add scroll event
    container.addEventListener('scroll', (e) => {
        //e.target refer to the element that triger the event which is in this case 'container'
        console.log(e.target.scrollTop);
        if (e.target.scrollTop > 400) {
            e.target.style.color = 'red'
        }else {
            e.target.style.color = 'blue'
        }

        //task1
        //on scroll change the font size of the content using scrolltop value
        if (e.target.scrollTop > 16) {
            e.target.style.fontSize = e.target.scrollTop + 'px'
            console.log(e.target.style.fontSize);
            
        }
    })
}