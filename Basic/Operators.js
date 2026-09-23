let x=10;
x++;

console.log(x);
x--;

console.log(x);

//Logical operator

let age=20;
let c=true;
console.log(age>=18&&c);

console.log(age>=18||c);

console.log(!c);

//comparison 
let a=10;

let b=20;
console.log(a>b);
console.log(a<b);

console.log(a==b);
console.log(a===b);

console.log(a!=b);
console.log(a!==b);

//data type
let a=10;
console.log(typeof(a));    //number datatype

let name="yuvi";

let n;
comsole.log(n);
console.log(typeof(n));   // some kind of error

let y=null;        
console.log(y);      //by error during run time this gives object data type but it is NULL datatype

const x={
    name:"yuvi"
}
console.log(x);      // object error

console.log["apple"];     // array datatype