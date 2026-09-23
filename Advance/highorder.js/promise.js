const promise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("operation successfull")
    }
    else{
        reject("operation fail");
    }
});
promise. them(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})
