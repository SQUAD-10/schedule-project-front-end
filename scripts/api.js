const api = axios.create({
  baseURL: "http://localhost:3000",
});

// -> POST INFORMATION IN DB
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

      sessionStorage.date = '';
      sessionStorage.localDate = '';
    });
  }
}

// -> GET AND DISPLAY DB INFORMATION
function myAppointments() {
  api.get(`/${sessionStorage.place}/${sessionStorage.email}`)
  .then(({data}) => {
    return renderData(data)
  })
  .catch((err) => {
    return renderEmpty()
  });
}
setTimeout(myAppointments(), 100)

function renderData(data) {
  const appointment = document.querySelector(".appointment");
  const message = document.querySelector(".message");
  message.textContent = ''

  for(let i = 0; i < 5; i++) {
    appointment.innerHTML +=
    `<div class="wrapper">

      <div class="info">
        <strong> Data: </strong> <span></span> ${data[i].date.slice(8,10) + data[i].date.slice(4,8) + data[i].date.slice(0,4)}
      </div>
      <img class="btnDelete" src="images/delete.svg" onclick="deleteAppointment('${data[i]._id}')"/>
    </div>`
  }
}

setProfile()

function renderEmpty() {
  const message = document.querySelector(".message");
  message.innerHTML = "Não há agendamentos no momento."
}

// -> DELETE DB INFORMATION
function deleteAppointment(data) {
  api.delete(`/${sessionStorage.place}/${data}`)
  .then(({ data }) => {
    alert(data.message);
    document.location.reload(true)
  })
}
