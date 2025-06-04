/*
    배열(Array)
*/

const arr1 = [];
const arr2 = new Array();

arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);

arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);

console.log(arr1);
console.log(arr2);

console.log(arr1 == arr2);
console.log(arr1 === arr2);

const obj1 = {key1: "value1", key2: "value2"};
const obj2 = {key1: "value1", key2: "value2"};
console.log(obj1 === obj2);

// JSON
// JS 객체 또는 배열을 JSON 문자열로 변환 -> JSON.stringify();
// JSON 문자열을 JS객체 또는 배열로 변환  -> JSON.parse();
const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);
console.log(json1);
console.log(json2);
console.log(json1 === json2);

// 배열의 기본 내장 함수
const names = ['name1', 'name2', 'name3'];
// 값 추가
names.push('name4');
// 값 제거
console.log(names.pop());
// 값 수정
names.splice(1, 0, 'name5');    // 1번 index에서 0개 제거하고 name5 추가
console.log(names);
// 값 찾기
const findFx = n => n === 'name5';
const findName = names.find(findFx);;
console.log(findName);
const students = [
    {name: 'name1', age: 31},
    {name: 'name2', age: 32},
    {name: 'name3', age: 33},
    {name: 'name4', age: 34},
    {name: 'name5', age: 35},
];
console.log(students.find(s => s.name === 'name1'));
// 값 존재 유무
console.log(names.includes('name5'));   // return true, false

// 필터링
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.filter(n => n % 2 == 0));
console.log(students.filter(students => students.age === 32));

// 값 변경
console.log(numbers.map(n => n*10));    // 배열 값들에 반복 실행해서 그 값들을 모아서 새 배열을 만들어서 출력
console.log(students.map(student => {
    if (student.age === 32) {
        return {
            name: student.name,
        }
    }
    return student;
}))

// map 작동 방식
function map(array, fx) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push = fx(array[i], i);
    }
    return newArray;
};

// filter 작동 방식
const filter = (array, fx) => {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        if (fx(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}