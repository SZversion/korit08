const student = {
    name: "qwer",
    age: 23,
}

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student['age']);
const a = "name";
const b = "age";
console.log(student[a]);
console.log(student[b]);
student[a] = "asdf";
console.log(student);

student.printName = () => console.log(student.name);
student.printName();

console.log("========================");
const loginButton = {
    text: "로그인",
    onClick: () => student.printName(),
}
loginButton.onClick();
loginButton.onClick = () => console.log("로그인 버튼 클릭");
loginButton.onClick();
console.log(typeof(loginButton));

console.log("========================");
const loginButtonKeys = Object.keys(loginButton);       //loginButton의 키값들을 배열로 저장
for ( let i = 0; i < loginButtonKeys.length; i++ ) {
    console.log(loginButton[loginButtonKeys[i]])        //키값들로 다시 value 출력
}

console.log("========================");
const loginButtonValues = Object.values(loginButton);
console.log(loginButtonValues);
for(let i = 0; i < loginButtonValues; i++) {
    console.log(loginButtonValues[i]);
}

console.log("========================");
const loginButtonEntries = Object.entries(loginButton);
for(let i = 0; i < loginButtonEntries.length; i++) {
    const entry = loginButtonEntries[i];
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}

for(let entry of loginButtonEntries) {      //enhenced FOR
    const entry = loginButtonEntries[i];
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}