
async function handleDeleteButtonOnclick(studentId) {
    if(!confirm("삭제하시겠습니까?")) return;
    try {
        const response = fetch(`http://localhost:8080/api/js/student${studentId}`, {
            method: "DELETE",
        });
        const responseJson = await response.json();
        alert(JSON.stringify(responseJson) + "정보 삭제 완료");
    } catch(error) {
        console.error(error);
    }
    await loadStudentList();
}

async function getStudentAllRequest() {
    try {
        const response = await fetch("http://localhost:8080/api/js/student", {
            method: "GET",
        });
        const responseJson = await response.json();
        console.log(responseJson);
    } catch(error) {
        console.error(error);
    }
}

async function loadStudentList() {
    await getStudentAllRequest();
    const studentLis = studentList
        .map(student => {
            const text = `${student.id}. ${student.name}(${student.age}) - ${student.address}`;
            
            return `
            <li>${text} <button onclick="handleDeleteButtonOnclick(${student.id})">삭제❌</button></li>
            `
        }).join("");
    const studentListUl = document.querySelector(".student-list");
    studentListUl.innerHTML = studentLis;
}