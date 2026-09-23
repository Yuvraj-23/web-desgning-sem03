function step1(){
    return Promise.resolve(10);
}

step1().then(result=>{
    console.log("Step 1", result);


}).then(result=>{
    console.log("step 2" , result);
    return result+10;

}).then(result=>{
    console.log("Step 3", result);
    
}).catch(error=>{
    console.log("ERROR",error);
})