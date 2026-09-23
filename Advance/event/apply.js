const student1={
    name : "yuvraj"
};
const student2={
    name:"ram"
};

function introduce(city){
    console.log("my name is ${name} and i live in ${city}");
}


introduce.apply(student1,["delhi",24]);