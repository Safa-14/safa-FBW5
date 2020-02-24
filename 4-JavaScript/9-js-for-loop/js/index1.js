//10*
// for (let i = 0; i <10 ; i++) {
//         document.write("* <br>")
  
// }


// 10* 10times
// for (let i = 0; i <10 ; i++) {
//     for (let x = 0; x < 10 ; x++) {
//         document.write("* <br>")
//     }

//     document.write("/////////////////////<br>")
// }


// A star table
// for (let i = 0; i <5 ; i++) {
//     for (let x = 0; x < 5 ; x++) {
//         document.write("*")
//         document.write(" ")
//     }

// document.write("<br>")
  
// }


// Multiplication table
// for (let i = 1; i <=10 ; i++) {
//     for (let x = 1; x <=10 ; x++) {
//         document.write(i + ' x ' + x + ' = ' + i*x + "<br>")
//     }
//     document.write("<br>")
// }



/*
**
***
****
*****/

// for (let i = 0; i <= 4; i++) {
//     for (let x = 0; x <=i; x++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// document.write('<br>')

// /*****
// ****
// ***
// **
// */
// for (let i = 0; i <= 4; i++) {
//     for (let x =4; x >=i; x--) {
        
//         document.write('*')
//     }
//     document.write('<br>')
// }


// for (let i = 0; i <= 4; i++) {
//     for (let x =i; x >=4; x--) {
        
//         document.write('*')
//     }
//     document.write('<br>')
// }




//     *
//    **
//   ***
//  ****
// *****

//1rst method
// for (let i = 4; i >= 0; i--) {
//     for (let x =0; x <=4; x++) {
//         if (x < i){
//             document.write('&nbsp;&nbsp')
//         }
//         else {
//             document.write('*')
//         }
        
//     }
    
//     document.write('<br>')
// }

//2nd Method

// for (let i = 0; i <= 4; i++) {
//     for (let x = 0; x <=4; x++) {
//         if ((i+x) >= 4) {
//             document.write('*')
//         }
       
//     }
//     document.write('<br>')
// }



// for (let i = 0; i <= 4; i++) {
//     if (i==0 || i==4) {
//       for (let x = 0; x <=4; x++) {
//         document.write('*')
//       }
//     }
//     else {
//         for (let x = 0; x <=4; x++) {
//             if (x==0 || x==4) {
//                 document.write('*')
//             }
//             else {
//                 document.write('&nbsp;&nbsp')
//             }
            
//         }
//     }
//     document.write('<br>')
// }



// for (let i = 0; i <= 4; i++) {
//     for (let x = 0; x <=4; x++) {
//         if (((i*x) == 2 )|| ((i*x) == 6 ) ) {
//             document.write('&nbsp;&nbsp')
//         }else{
//             document.write(' * ')
//         }
       
//     }
//     document.write('<br>')
// }












function showBox(num) {
for (let i = 0; i <num; i++) {
    for (let x = 0; x <num; x++) {
        if (i == 0||i == num-1||x == 0||x == num-1|| x == i ||x+i==num-1){
            document.write('*')
        }else {
            document.write('&nbsp;&nbsp')
        }
        
    }
    document.write('<br>')
}
}

showBox(10)