//--------------------------------------//
//         EACH NUMBER ON A LINE        //
//--------------------------------------//
function txt_aff (num){
    if (num != 0) {
        txt_aff (num-1)
    }
    console.log(num)
}

txt_aff (5)



//--------------------------------------//
// EACH NUMBER ON A LINE (SECOND METHOD)//
//--------------------------------------//

// function txt_aff (num){
//     if(num == 0) {
//         console.log(num)
//     }else {
//         txt_aff (num-1)
//         console.log(num)
//     }
// }
// txt_aff (4)




//--------------------------------------//
//             ON THE SAME LINE         //
//--------------------------------------//

console.log("ON THE SAME LINE ")


function txt_aff1 (num,ch){
    if(num == 0) {
        return num + ch
    }else {
        ch="," + num + ch
        return txt_aff1 (num-1,ch)
        
    }
}

console.log(txt_aff1 (5,""))


















// function txt_add(num, ch) {
// 	if (num < 0) {
// 		return ch;
// 	} else {
// 		ch=num+","+ch;
//         return txt_add(num-1, ch);
        
// 	}
// }


// var s = txt_add(5, "");
// console.log(s);