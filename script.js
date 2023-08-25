// var age = Number(prompt('Enter Your Age:'))

// if(age>60){
//     alert('Plz wait some more time..Defenitely You will get Best Match')
// }
// else if(age<18){
//     alert("Your age already crossed marriage age..No chance of getting marriage")
// }
// else{
//     alert('Thanks for registration..You will get match details soon by email')
// }

// function welcomedelhi(){
//     console.log("Hello from Delhi");
// }
// welcomedelhi(); //function invocation

// const thisisanonymousfunction = function(){
//     console.log("Thisisanonymousfunction")
// };
// thisisanonymousfunction()

// const letter = function sen(){
//     console.log("hellofunctione");
// };
// letter();
// console.log(letter);
// console.log(sen);
// sen() // this caught an error : sen not define because of hoisting in javascript.

// function multiply(n,m){
//     return n*m; //Parameters
// }
// const productvalue=multiply(7,8); // Arguments
// console.log(productvalue);

// (function(){
//     console.log("hello IIFEs");
// })
// ()

// function callme(){
//     console.log("hello world");
// }
// greet(callme);

// 2a find the maximum of two numbers

// let num=function(a,b){
//     if(a>b){
//         console.log(a);
//     }
//     else{
//         console.log(b);
//     }
// }
// num(7,5);


// let numArrow=(a,b) =>{   //arrow function
//     if(a>b){
//         console.log(a);
//     }
//     else{
//         console.log(b);
//     }
// }
// numArrow(10,20);


// find the sum of all elements in an array 


// let sum1 = function(array){
//     let sum=0;
//     for(i=0;i<array.length;i++){
//         sum+=array[i];
//     }
//     console.log(sum);
// }
// array=[1,2,3,4,5];
// (sum1(array))


// let sum2=(array)=>{
//     let sum=0;
//     for(i=0;i<array.length;i++){
//         sum+=array[i];
//     }
//     return(sum)
// }
// array=[1,2,3,4,5,6,7,8,9];
// console.log(sum2(array));  //15 , 16




// write a function that takes a string as an argument and returns a new string with all the vowels removed.

// let st=function(string){

// }

// const num=(array)=>{
//     let max=0;
//     for(i=0;i<array.length;i++){
//     }
// }
// array=[1,2,3,-14,22,45,2]
// console.log(max(number));

// const a = [1, 2, 3, 4, 5, 6, 0];
// const factorial = (num) => {
//   if (num === 0) return 1;
//   let fac = 1;
//   for (let k = 1; k <= num; k++) {
//     fac *= k;
//   }
//   return fac;
// };
// const arrow = (arr) => {
//   let n = [];
//   for (let j = 0; j < arr.length; j++) {
//     n[j] = factorial(arr[j]);
//   }
//   return n;
// };
// console.log(arrow(a));

// function abc(){
//     console.log("hii this is normal function");
// }
// function call(callback){
//     callback();
// }
// call(abc);



// write a function that takes a string as an argument and returns a new string with all the vowels removed.

// function string(){
//     const v=(a,e,i,o,u);
//     if(string==v){
//         console.log(string);
//     }
//     else{
//         console.log(string);
//     }
// }
// string("my name is babita");


// const arr=[1,2,3,4,6,12,18,24,30];
// const ne=arr.filter(value=>(value%6===0));
// console.log(ne)


// 7) a Write a program that takes an array of strings and returns a new array with the length of each string.

// const array= ["Babita","is","cute","aslo","intelligent"];
// const size=array.map(value =>(value.length));
// console.log(size)      //[6,2,4,4,11]


// b)Write a program that takes an array of numbers and returns the sum and max of all the numbers.

// find max 
// const array1=[9,4,7,25,7,8];
// const maximum=array.reduce((value,num)=>Math.max(value,num));
// console.log(maximum);  // 25

// sum
// const array2=[9,4,7,25,7,8];
// const sum=array.reduce((acc,cuu)=>acc+cuu,0);
// console.log(sum);       //60

// c) Write a program that takes an array of numbers and returns a new array with only the numbers that are greater than 5.


// const array=[1,5,6,3,8,9,5,6];
// const max= array.filter(value=>(value>5));
// console.log(max)           //[6,8,9,6]

// Suppose you have an array of objects representing students, where each object contains the student's name, age, and grades in different subjects. Your task is to calculate the average grade of students who are older than 18.

// const students = [
//   { name: 'Alice', age: 19, grades: [85, 90, 92] },
//   { name: 'Bob', age: 17, grades: [75, 80, 88] },
//   { name: 'Charlie', age: 20, grades: [90, 92, 94] },
//   { name: 'Dave', age: 22, grades: [78, 82, 86] },
//   { name: 'Eve', age: 18, grades: [88, 90, 92] },
// ];
// const student=students.filter(value=>(value.age>18));
// console.log(student);

// const grade=student.map(val=>(val.grades));
// console.log(grade);

// const average=grade.reduce((acc,cuu)=>acc+cuu,0);
// console.log(average)


// Write a program that simulates a countdown timer, starting from a given number of seconds n and counting down to 0, displaying the remaining time every second using setInterval. After the countdown is over, display a message "Time's up!"

// const n=parseInt(prompt("enter number"))
// for(let i=n;i>=0;i--){
//     const count=setInterval(() => {
//         alert(i);
//         if(i===0){
//             clearInterval(count);
//             confirm("Times-up!");
//         }
//     }, 2000);
// }


 
// WAP to demonstrate different types of scopes in JS.

// function num(a,b){
//     a=3;
//     b=4
// }


//JS Modules questions :-

// a Create a module that exports an object with two methods, add and subtract, that take in two arguments each and return the sum and difference of those numbers, respectively. Import this module in another file and use it to find the sum and difference of two numbers.

// import {value,value2} from "./operation.js";

// const sum=value(1,5);
// const difference=value2(90,40);

// console.log(sum);
// console.log(difference);

// b)

// import { sideofrectangle } from "./operation.js";
// const area= sideofrectangle(27,56);
// console.log("area of rectangle is",area);

// // 1512



// c)


// import{ average,sum,number} from "./operation.js"

// console.log(number)
// console.log(sum);
// console.log(average);


// 3 WAP to demonstrate different types of scopes in JS.


//global scope    //Global scope are those declared outside of a block.

// var number = 10;   
// console.log(window.number); //10

//error because let and const islocal and block scope.

// let number1=20
// console.log(window.number1);

//local scope    //Local scope are those declared inside of a block.2

// {
//     var num1=2;
//     let num2=3;
//     const num3=4;

// }
// console.log(num1);  //2
// console.log(num2);  //error
// console.log(num3);  //error


//function scopping

// var num1=12;
// const num2=13;
// let num3=34;
// function num1num2num3() {
//     num1=30;
//     num2=23;
//     num3=34;
//     console.log(num1,num2,num3);
// }
// console.log(num1,num2,num3) //12 13 34


// Hoisting  //Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope

//var hoisting

// console.log(a);
// var a=10;     //undefined

//function hoisting

// b();
// function b(){
//     console.log("Hello babita");
// };             // Hello babita


// console.log(m)

// var m=function(){
//     console.log("JAVASCRIPT")
// }            
// m()          //javascript

//let and const hoisting

// console.log(num)
// const num=10;    // num is not initialize


// 2 c) to sort an array of numbers in ascending order using a function.

// let number=(array)=>{
//     let a= array.sort()
//     console.log(a);

// }
// array=[7,4,9,3,6]
// number(array);    //[3,4,6,7,9]

// 2 d) factorial of a number using a recursive function.

// let number=(a)=>{
//     let i=1;
//     let f=1
//     while(a>=i){
//         f*=i;
//         i++;
//     }        
//     console.log(f);
// }
// a=5;
// number(a);   // 120

// 2 e)write a function that takes a string as an argument and returns a new string with all the vowels removed.

// let string=(a)=>{
//     let i=0;
//     let sum=""
//     let vowels=['a','e','i','o','u'];
//     while(i<=a.length){
//         if(!vowels.includes(a[i])){
//         }
//         i++;
//     }
//     console.log(a);
// }
// a="pineapple";
// string(a);



// const sum=(a,b)=>{
//     return(a+b)
// }
// console.log(a(5,8));
// const sub=(c,d)=>{
//     return(c-d)
// }
// console.log(sum(4,5));

// const babita=(m,b)=>{
//     console.log(m+b)
// }
// babita(2,4)
// const amisha=(o,k)=>{
//     console.log(o+k)
// }
// babita(2,4)



// const products = [
//     { name: 'Apple', price: 1, quantity: 3 },
//     { name: 'Banana', price: 0.5, quantity: 0 },
//     { name: 'Orange', price: 2, quantity: 2 },
//     { name: 'Grapes', price: 3, quantity: 5 }
//   ]
// const calculate=products.filter((value)=>value.quantity>0).map((value)=>value.quantity*value.price).reduce((acc,cuu)=>acc+cuu);
// console.log(calculate);


// const products = [
//     { name: 'Apple', price: 1, quantity: 3 },
//     { name: 'Banana', price: 0.5, quantity: 0 },
//     { name: 'Orange', price: 2, quantity: 2 },
//     { name: 'Grapes', price: 3, quantity: 5 }
//   ]
// const calculate=products.filter((value)=>value.quantity>0).map((value)=>value.quantity*value.price).reduce((acc,cuu)=>acc+cuu);
// console.log(calculate);

// var wordarray=["apple","banana","cherry"]
// var capitalize=wordarray.map(function(word){
//     return word.charAt(0).  toUpperCase().word.slice(1);
// });
// console.log(capitalize);

// function num(){
//     return new Promise((resolve,reject)=>{
//        const c=9;
//         resolve(c);
//     })
// }num().then((c)=>{
//     console.log(c)
// })