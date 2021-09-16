const api = axios.create({
  baseURL: "http://localhost:3000",
});

// -> POST INFORMATION IN DB
function setAppointment() {
  if(sessionStorage.date == '') {
    modalRegister()
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

// FIX CITY NAME
let city = ''
sessionStorage.place == 'santos' ? city = 'Santos' : city = 'São Paulo'

// -> GET AND DISPLAY DB INFORMATION
function myAppointments() {
  api.get(`/${sessionStorage.place}/${sessionStorage.email}`)
  .then(({data}) => {
    return renderData(data)
  })
  .catch((err) => {
    const appointment = document.querySelector(".appointment");
    if (appointment.innerText == '') {
      renderEmpty()
    }
  });
}
setTimeout(myAppointments(), 100)

function renderData(data) {
  const appointment = document.querySelector(".appointment");

  for(let i = 0; i < 5; i++) {
    appointment.innerHTML +=
    `<div class="wrapper">

      <div class="info">
        <strong> Data: </strong> <span></span> ${data[i].date.slice(8,10) + data[i].date.slice(4,8) + data[i].date.slice(0,4)}
        <span></span> <strong> Unidade: </strong> <span></span> ${city}
      </div>
      <img class="btn-delete" src="images/delete.svg" onclick="modalDelete('${data[i]._id}')"/>
    </div>`
  }
}

setProfile()

function renderEmpty() {
  const message = document.querySelector(".message");
  message.setAttribute('style', 'border: 0.1rem solid var(--orange);')
  message.innerHTML = `Você não possui agendamentos para a unidade ${city} no momento`
}

// -> DELETE DB INFORMATION
function deleteAppointment(data) {
  api.delete(`/${sessionStorage.place}/${data}`)
  .then(({ data }) => {
    //alert(data.message);
    document.location.reload(true)
  })
}
