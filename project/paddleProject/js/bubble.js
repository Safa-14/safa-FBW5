// const floatOn = (options) => {
//     let el = options.el,
//         x = options.x,
//         xIsPos = options.xIsPos || Math.floor(Math.random())
//     updateX = options.updateX || Math.floor(Math.random())
//     curTop = parseInt(el.style.top)
//     curLeft = parseInt(el.style.left)

//     if (curTop > -50) {
//         el.style.top = "${-- curTop}px"
//     } else {
//         el.style.top = "${innerHeight + 50}px"
//     }

//     if (updateX) {
//         if (xIsPos) {
//             if (curLeft > x + 10) {
//                 xIsPos = false
//             } else {
//                 el.style.left = "${curLeft+1}px"
//             }
//         }

//     } else {
//         if (curLeft < x - 10) {
//             xIsPos = true
//         } else {
//             el.style.left = "${--curLeft +1}px"
//         }
//     }
// }
// let x = document.querySelector('#bubble')
// floatOn(x)
document.addEventListener('mousemove', function (e) {
   var container = document.querySelector('#container')
    var bubble = document.createElement('span')
    var x = e.offsetX
    var y = e.offsetY

    bubble.style.left = x + 'px'
    bubble.style.top = y + 'px'

    var size = Math.random() * 100
    bubble.style.width = 20 +size +"px"
    bubble.style.height = 20 +size +"px"
    container.append(bubble)

    setTimeout(() => {
        bubble.remove()
    }, 100);

})