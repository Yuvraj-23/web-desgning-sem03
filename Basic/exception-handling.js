//TRY  CATCH FINAllY
// try{
//     let a=10;
//     console.log(a);
//     console.log(b);
// }
// catch (error) {
//     console.log("An error occurred:",error.message);
// }
// finally{
//      let a=10;
//     console.log(a);
//     console.log(b);
// }

//costom error
function checkage(age){
    if(age<18){
        throw new error("not");
    }
    console.log("yes");
}
try{
    checkage(14);
}
catch(error){
    console.log(error.message)
}