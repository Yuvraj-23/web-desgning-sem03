//
// function calculate(a,b,operation){
//     return operation(a,b);
// }
// function add(x,y){
//     return x+y;
// }
// function multiply(x,y){
//     return x*y;
// }
// console.log(calculate(10,5,add));

//DOT MAP
// let numbers=[1,2,3,4,5];
// // for(let i=0;i<5;i++){          //long method of for loop use map instead for
// //     console.log(i*i);
// // }
// let squares=numbers.map(function(number){
//     return number*number;
// });
// console.log(squares);

//using arrow function



//.filter
// let number=[1,2,3,4,5];
// let even =number.filter(number=>{
//     return number%2==0;

// });

// console.log(even);



//reduce
// let numbers=[10,20,30,40,50];

// let total = numbers.reduce((sum,number)=>{
//     return sum+number;
// },0);
// console.log(total);

// let numbers=[10,20,30,40,50];

// let total = numbers.reduce((max,number)=>{
//     return max < number ? number : max;
// },numbers[0]);
// console.log(total);



//find
// let students = [
//     { id: 1, name: "vikas", marks: 30 },
//     { id: 2, name: "rahul", marks: 20 },
//     { id: 3, name: "ram", marks: 10 },
//     { id: 4, name: "yash", marks: 40 }
// ];

// let student = students.find(s => s.id === 2);

// console.log(student);