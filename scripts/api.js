const api = axios.create({
  baseURL: "http://localhost:3000",
});

function setAppointment() {
  if(sessionStorage.date == '') {
    window.alert('É preciso escolher uma data ou uma nova data')
  }
  else {
    api.post(`/${sessionStorage.place}/post`, {
      name: sessionStorage.name,
      email: sessionStorage.email,
      date: sessionStorage.date,
    })
    .then(({ data }) => {
      console.log(data);
      /*
      const contentContainer = document.querySelector(".data");

      const userName = document.createElement("h2");

      userName.textContent = sessionStorage.name;

      const userDate = document.createElement("h3");

      userDate.textContent = sessionStorage.localDate;

      contentContainer.appendChild(userName);
      contentContainer.appendChild(userDate);
      */

      sessionStorage.date = '';
      sessionStorage.localDate = '';
    });
  }
}
