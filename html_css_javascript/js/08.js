const student = {
    name: 'name1',
    age: 32,
    address: '남구',
    phone: '010-1111-2222',
};

// 비구조 할당
const { name, address } = student;
console.log(name, address);

// REST 문법
const { age, phone, ...something } = student;
console.log(age, phone, something); // 출력 안하고 남은것들을 객체로 반환

const numbers = [1,2,3,4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

//spread
const newStudent = {
    ...student,
    gender: '남',
}
console.log(newStudent);

//배열 spread
const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

let names = [];
function addName(name) {
    // names.push(name);        push는 원본 배열을 수정함
    names = [...names, name];   // spread 는 새로운 배열을 만들어서 값을 복사해 오기 때문에 좀 더 안정적임
}

let obj = {
    data1: "data1",
    data2: "data2", 
}

function addProps(props) {
    obj = {
        ...obj,
        ...props,
    }
}
addProps({data3: "data3", data4: "data4"});
console.log(obj);