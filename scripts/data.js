function saveUser() {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  sessionStorage.setItem('name', name)
  sessionStorage.setItem('email', email)
  window.location.href = '/calendar.html'
}

function saveSelection() {
  const place = document.querySelector('#options').value;
  sessionStorage.setItem('place', place)
  console.log(place)
  console.log(sessionStorage)
}

const day = document.querySelectorAll('.cal-body__day');

for(let i = 0; i < day.length; i++) {
  day[i].addEventListener('mousedown', () => {
    let dia = day[i].innerText
    console.log(dia)
  })
}
