let name = "qwer";
console.log('hello.js');
console.log(name);

let data1 = 10;
let data2 = "10";
let result1 = data1 == data2;
console.log(result1);
let result2 = data1 === data2;
console.log(result2);
console.log(typeof(data1), typeof(data2));

// not 연산 활용법
console.log(!1);
console.log(!0);
console.log(!"a");
console.log(!"");
console.log(!null);
console.log(!!null);


let data = {
    name: "qwer",
    age: 32
}
if (data.name === "qwer") {
    console.log("error");
} else if (data.age === 32) {
    console.log("error but age is true");
} else {
    console.log("error error")
}