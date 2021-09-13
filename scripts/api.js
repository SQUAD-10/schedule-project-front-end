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


function myAppointments() {
  api.get(`/${sessionStorage.place}/${sessionStorage.email}`)
  .then(({data}) => {
    return renderData(data)
  })
  .catch(err => {
  });
}

function renderData(data) {
  const myAppointments = document.querySelector("#appointment");
  const Appointment = document.createElement("span");

  for(let i = 0; i < data.length; i++) {
    Appointment.innerHTML += `<div>
    Nome: ${data[i].name} </br>
    Email: ${data[i].email} </br>
    Data: ${data[i].date.slice(8,10) + data[i].date.slice(4,8) + data[i].date.slice(0,4)} </br>
    </div>`

    myAppointments.appendChild(Appointment);
  }
}

setTimeout(myAppointments(), 100)
