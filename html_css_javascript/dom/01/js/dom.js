const title1 = document.getElementById("title");
console.log({title1});

const name = "name1";
const age = 32;

const person1 = {
    "name": name,
    "age": age,
}

const person2 = {
    name,
    age,
    address: "city",
}

const titles = document.getElementsByClassName("title");
console.log({titles});
const h3s = document.getElementsByTagName("h3");
console.log({h3s});

console.log(document);

const title1q = document.querySelector("#title");
const titlesq = document.querySelectorAll(".title");

const h3sq = document.querySelectorAll("h3");
const d1q = document.querySelector("#d1");
const d2q = d1q.querySelector("#d2");
const d22q = document.querySelector("#d1 > #d2");

console.log({d1q});
console.log({d2q});
console.log({d22q});

d2q.innerText = "<p>innerText</p>";
d2q.innerHTML += "<p>innerText</p>";

const students = [
    {
        name: "name1",
        age: 32,
        address: "남구",
    },
    {
        name: "name2",
        age: 33,
        address: "북구",
    },
    {
        name: "name3",
        age: 34,
        address: "동구",
    },
];
const studentTableBody = document.querySelector(".student-table > tbody");
const studentTr = students.map((s, index) => {
    return `<tr>
        <td>${index + 1}</td>
        <td>${s.name}</td>
        <td>${s.age}</td>
        <td>${s.address}</td>
    </tr>`
});
studentTableBody.innerHTML = studentTr.join("");

const tdList = studentTableBody.querySelectorAll("td");
tdList.forEach(td => td.setAttribute("style", "border: 1px solid #000"));

const studentTable = document.querySelector(".student-table");
studentTable.classList.add("table-border");