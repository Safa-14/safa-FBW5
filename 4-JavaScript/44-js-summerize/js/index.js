//TASK1
//what will this code print
//var x = 5 

{
    //let d = 3
    //console.log(x);
    
}
//console.log(d); //error

//answer Task1
//it will print 5 and error of d is not defined

////////////////////////////////////
//////////////////////////////////////

//TASK2
//what will this code print
//let x = 5 

{
    //var d = 3
    //console.log(x);
    
}
//console.log(d);

//answer Task2
//it will print 5 and 3 

////////////////////////////////////
//////////////////////////////////////

//TASK3
//what will this code print
//const i = 6 
//console.log(i);
//i =2
//console.log(i);

//answer Task3
//it will print 6 and then an error because we declare using const
//so this variable value is unchangeable 

////////////////////////////////////
//////////////////////////////////////

//TASK4
//what will this code print
// const arr = [1,3,6] 
// console.log(arr[2]);
// arr[2] = 8
// console.log(arr[2]);

//answer Task4
//it will print 6 and then 8 without any problem because we change a value of an a const array not the arr

////////////////////////////////////
//////////////////////////////////////

//TASK5
//what will this code print
let c = 3
let y = c
y = 7
console.log(c);
console.log(y);
 
//answer Task5
//it will print 3 then 7

////////////////////////////////////
//////////////////////////////////////

//TASK6
//what will this code print
// let obj = {
//     prop1: 2,
//     prop2: 'dumm',
//     prop3: true

// }
// obj.prop2 = 'hello'
// console.log(obj.prop1);
// console.log(obj.prop2);
// console.log(obj);


//answer Task6
//it will print 2 then hello then {prop1: 2, prop2: "hello", prop3: true}

////////////////////////////////////
//////////////////////////////////////

//TASK7
//what will this code print
// let obj1 = {
//     prop1: 2,
//     prop2: 'dumm',
//     prop3: true
// }

// let obj2 = obj1
// obj2.prop1 = 6
// console.log(obj2.prop1);
// console.log(obj1.prop1);
//console.log(obj);


//answer Task7
//it will print 6 then 6

////////////////////////////////////
//////////////////////////////////////

//TASK8
//write the shortest code to print items in the following array
//which are greater or equal to 6
let arr = [2,6,7,9,2,6,-9,3,10,12,66,-6]

let newArr= arr.filter(item =>  item  >= 6 )
console.log(newArr);

//answer Task8
//it will [6, 7, 9, 6, 10, 12, 66]

////////////////////////////////////
//////////////////////////////////////

//TASK9
//using last arr  'arr' and print new array which contains the items
//from arr multiable with 2
console.log(arr.map( item => item*2));

//answer Task9
//it will [4, 12, 14, 18, 4, 12, -18, 6, 20, 24, 132, -12]

////////////////////////////////////
//////////////////////////////////////

//TASK10
//combin task 8 and 9
//console.log(newArr.map( item => item*2));  
console.log(arr.filter(item =>  item  >= 6 ).map( item => item*2)); 
//answer Task10
//it will [12, 14, 18, 12, 20, 24, 132]
  

////////////////////////////////////
//////////////////////////////////////

