
let studentInputValues = {
    name: "",
    age: "",
    address: "",
}

function handleRegisterOnkeyup(e) {
    studentInputValues = {
        ...studentInputValues,
        [e.target.name]: e.target.value,
    }
}

function studentRegister() {

    const handleRegisterOnclick = (e) => {
        studentList = [...studentList, studentInputValues];
        studentInputValues = {
            name: "",
            age: "",
            address: "",
        }
        console.log(studentList);
    }

    return `
    <div>
        ${studentRegisterInput({type: "text", name: "name", onkeyup: "handleRegisterOnkeyup"})}
        ${studentRegisterInput({type: "text", name: "age", onkeyup: "handleRegisterOnkeyup"})}
        ${studentRegisterInput({type: "text", name: "address", onkeyup: "handleRegisterOnkeyup"})}
    </div>
    `;
}