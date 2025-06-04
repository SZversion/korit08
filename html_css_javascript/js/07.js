/*
    비구조할당(구조분해)
*/

const student = {
    name: "name1",
    age: 32,
    address: "남구",
}

const studentName = student.name;
const studentAge = student.age;
console.log(studentName);
console.log(studentAge);

const { studentName2, studentAge2 } = student;
console.log(studentName2);
console.log(studentAge2);

const { name, age } = student;  // 내부 변수명과 같으면 자동으로 할당됨
console.log(name);
console.log(age);

function printStudentInfo({ name, age, address: addr }) {
    console.log(name);
    console.log(age);
    console.log(addr);
}
printStudentInfo(student);

// 객체 구조 분해 할 때 주의 할 점
// 객체의 속성명이 같으면 변수이름을 바꿔줘야 함
const s1 = {
    name: "name11",
    age: 21,
}
const s2 = {
    name: "name22",
    age: 33,
}
const {name: n1, age: a1} = s1;
const {name: n2, age: a2} = s2;

// 배열 비구조할당
const numbers = [1,2,3,4,5];
const [num1, num2, num3] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);

const useState = (data) => {
    const dataState = {
        data: data,
        setData: (d) => {
            console.log(d, "Data Set")
        }
    }
    return [ dataState.data, dataState.setData ];
};
const [ userData, setUserData ] = useState({username: 'test', password: '1234'});
console.log(userData);
setUserData({username: 'test2', password: 'qwer'});
console.log(userData);