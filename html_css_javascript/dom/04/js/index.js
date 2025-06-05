window.onload = () => {
    const root = document.querySelector("#root");
    render(root);
}

function render(rootElement) {
    rootElement.innerHTML = app();
}