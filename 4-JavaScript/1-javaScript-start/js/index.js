{  

    var x = 6;          //when we use var it is a global var but with let it is a local var
    {
        let x = 5
        console.log(x)
    }          
// const x = 5;        //static variable unchanged
// x = 8               //overwrite  so 8 will be showed on the x variable

x = x + 1           //6
//x++
//x += 1

//x = x - 1         //4
//x--
//x-=1
{
    console.log(x)
}

}
console.log(x)