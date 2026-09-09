let students = [
    { id: 1, name: "vikas", marks: 30 },
    { id: 2, name: "rahul", marks: 20 },
    { id: 3, name: "ram", marks: 10 },
    { id: 4, name: "yash", marks: 40 }
];

let student = students.find(s => s.id === 2);

console.log(student);