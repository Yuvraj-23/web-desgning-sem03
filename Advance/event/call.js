const student1={
    name : "yuvraj"
};
const student2={
    name:"ram"
};

function introduce(city){
    console.log("my name is ${name} and i live in ${city}");
}

introduce.call(student1,"delhi");
introduce.call(student2,"meerut");