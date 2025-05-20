function app() {
  alert("테스트 데이터 알림 출력");
  fetch("http://localhost:8080/api/names")
    .then(response => {
      response.json().then(
        data => {
          const nameList = document.querySelector(".name-list");
          const nameDivelements = data.map(d => `<div>${d}</div>`).join("");
          nameList.innerHTML = nameDivelements;
          console.log(data);
        })
    });

  fetch("http://localhost:8080/api/address")
    .then(response => {
      response.json().then(
        data => {
          const addressList = document.querySelector(".address");
          addressList.innerHTML = data.map(d => `<li>${d}</li>`).join("");
          console.log(data);
        })
    });
}

app();
