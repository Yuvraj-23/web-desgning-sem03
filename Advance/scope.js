//GLOBAL SCOPE
// let name = "Yuvraj"; // Global variable

// function showName() {
//     console.log(name);
// }

// showName();          // Yuvraj
// console.log(name);   // Yuvraj


//FUNCTION SCOPE
// function show() {
//     let age = 20; // Function scope variable

//     console.log(age); // 20
// }
// show();

//console.log(age); // Erro age is not defined

//BLOCK SCOPE  yeh jb chalega jb condiotion true hogii
// if(true){
//     let x=10;
//     let y=20;
//     console.log(x);
//     console.log(y);
// }


//HOISTING.  //tempror dead zone(TDZ) -the period b/w a entering a scope and initializeing a let and const is called TDZ
// console.log(age);
// //TDZ START
// let age=19;  
// //TDZ END


//CLOSER jo bhi humara outer function h or inner function h. inner function outer function ki sari variable\function yyad rakha ga 
// even after outer function is competely executed or end 
function outer(){
    let counter=0;

    function inner(){
        counter++;
        console.log(counter);
    }
    return inner;
    
}
let i=outer();
i();
i();
i();
i();