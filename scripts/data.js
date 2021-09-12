function saveUser() {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  sessionStorage.setItem('name', name)
  sessionStorage.setItem('email', email)
  window.location.href = '/calendar.html'
}

function savePlaceSelection() {
  const place = document.querySelector('#options').value;
  sessionStorage.setItem('place', place)
  console.log(place)
  console.log(sessionStorage)
}


const calendarDay = document.querySelectorAll('.cal-body__day');
const calendarMonth = document.querySelector('.cal-month__current')

const day = []
const month = []
const year = []

function saveCalendar() {
  for(let i = 0; i < calendarDay.length; i++) {
    calendarDay[i].addEventListener('mousedown', () => {
      let selectDay = calendarDay[i].innerText
      day.splice(0, 1, selectDay)
    })
    calendarDay[i].addEventListener('click', () => {
      let selectMonth = calendarMonth.innerText
      changeToNumber(selectMonth.slice(0, -5))
      year.splice(0, 1, selectMonth.slice(-4))
    })
  }
}

function changeToNumber(monthName) {
  let number = ''
  if(monthName == 'janeiro') {
    number = monthName.replace(monthName, '01')
  } 
  else if (monthName == 'fevereiro') {
    number = monthName.replace(monthName, '02')
  }
  else if (monthName == 'março') {
    number = monthName.replace(monthName, '03')
  }
  else if (monthName == 'abril') {
    number = monthName.replace(monthName, '04')
  }
  else if (monthName == 'maio') {
    number = monthName.replace(monthName, '05')
  }
  else if (monthName == 'junho') {
    number = monthName.replace(monthName, '06')
  }
  else if (monthName == 'julho') {
    number = monthName.replace(monthName, '07')
  }
  else if (monthName == 'agosto') {
    number = monthName.replace(monthName, '08')
  }
  else if (monthName == 'setembro') {
    number = monthName.replace(monthName, '09')
  }
  else if (monthName == 'outubro') {
    number = monthName.replace(monthName, '10')
  }
  else if (monthName == 'novembro') {
    number = monthName.replace(monthName, '11')
  }
  else if (monthName == 'dezembro') {
    number = monthName.replace(monthName, '12')
  }
  month.splice(0, 1, number)
}

saveCalendar()

