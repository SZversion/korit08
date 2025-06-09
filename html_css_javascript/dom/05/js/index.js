window.onload = () => {
    const root = document.querySelector("#root");
    render(root);
    loadStudentList();
}

function render(targetElement) {
    targetElement.innerHTML = app();
}