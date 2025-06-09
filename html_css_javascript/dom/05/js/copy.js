let studentList = [];

function app() {
    const appInfo = {
        title: "Component Study",
        date: new Date().toLocaleDateString(),
        author: 'junil',
    }

    return `
        <div>
            <h1>제목: ${appInfo.title}</h1>
            <h2>작성일: ${appInfo.date}</h2>
            <h2>작성자: ${appInfo.author}</h2>
            ${studentRegister()}
            <ul class="student-list"></ul>
        </div>
    `;
}