str = 'mein Name is Safa'
/////////////////////////////////////////////////////////////////////////
////     TEST THE FIRST CHARACTER OF A STIRNG IF IT IS UPPERCASE       //
/////////////////////////////////////////////////////////////////////////

document.write('/////////////////////////////////////////////////////////////////////////////////////////////////////////////<br>')

function test (str){
    if(str.charAt(0) == str.charAt(0).toUpperCase()){
        return 'Yes, the first character of : " ' + str + ' " is uppercase'
    }
    return 'No, the first character of : " ' + str + ' " is not uppercase'
}
document.write(test (str) + '<br>')

/////////////////////////////////////////////////////////////////////////
////                COUNT NUMBER OF WORDS IN A STRING                  //
/////////////////////////////////////////////////////////////////////////
document.write('/////////////////////////////////////////////////////////////////////////////////////////////////////////////<br>')

let stor = 1
function countWord (str) {
    let arr= str.split(' ')
    return (arr.length)
}

document.write('This string has ' +countWord (str,0)+' words <br>')

/////////////////////////////////////////////////////////////////////////
////     SPLIT A STRING AND CONVERT IT INTI AN ARRAY OF WORDS         ///
/////////////////////////////////////////////////////////////////////////
document.write('/////////////////////////////////////////////////////////////////////////////////////////////////////////////<br>')

function splitString(str) {
    return arr= str.split(' ')
}
document.write('The new array is : ' + splitString(str) +'  <br>')



/////////////////////////////////////////////////////////////////////////
////              CAPITALIZE THE FIRST LETTER OF A STRING             ///
/////////////////////////////////////////////////////////////////////////
document.write('/////////////////////////////////////////////////////////////////////////////////////////////////////////////<br>')

function capitalizeFirstLetter(str) {
    if(str.charAt(0) != str.charAt(0).toUpperCase()){
        return str.charAt(0).toUpperCase()+str.slice(1)
    }else {
        return str
    }
}

document.write('The new String is  : ' +capitalizeFirstLetter(str) +'<br>')



/////////////////////////////////////////////////////////////////////////
////              CAPITALIZE THE FIRST LETTER OF EACH WORD            ///
/////////////////////////////////////////////////////////////////////////
document.write('/////////////////////////////////////////////////////////////////////////////////////////////////////////////<br>')

function capitalize(str) {
    arr = splitString(str) 
    for (let i = 0; i < arr.length; i++) {
        arr[i]=capitalizeFirstLetter(arr[i])
        
    }
     
    return arr.join(' ')
}

document.write('The new String after capitalizing each word is  : ' +capitalize(str)+'<br>')

document.write('/////////////////////////////////////////////////////////////////////////////////////////////////////////////<br>')
