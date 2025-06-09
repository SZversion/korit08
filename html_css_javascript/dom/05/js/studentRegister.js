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

async function registerStudentRequest() {
    try {
        const requestURL = "http://localhost:8080/api/js/student";
        const requestBody = JSON.stringify(studentInputValues);
        const response = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: requestBody,
        });
        const responseJson = await response.json();
        console.log(responseJson);
    } catch(error) {
        console.error(error);
    }
}

const handleRegisterOnclick = (e) => {
    registerStudentRequest();

    loadStudentList();
}

function studentRegister() {
    return `
    <div>
        ${studentRegisterInput({type: "text", name: "name", onkeyup: "handleRegisterOnkeyup"})}
        ${studentRegisterInput({type: "text", name: "age", onkeyup: "handleRegisterOnkeyup"})}
        ${studentRegisterInput({type: "text", name: "address", onkeyup: "handleRegisterOnkeyup"})}
        <div>
            <button onclick="handleRegisterOnclick(event)">등록</button>
        </div>
    </div>
    `;
}