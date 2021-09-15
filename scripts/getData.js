function saveUser() {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  sessionStorage.setItem('name', name)
  sessionStorage.setItem('email', email)
  window.location.href = '/calendar.html'
}

function savePlace() {
  const place = document.querySelector('#options').value;
  sessionStorage.setItem('place', place)
  console.log(place)
  console.log(sessionStorage)
}


const calendarDay = document.querySelectorAll('.cal-body__day');
const calendarDayToday = document.querySelectorAll('.cal-day__day--today');
const currentDay = calendarDayToday[0].innerText

const calendarMonth = document.querySelector('.cal-month__current')
const currentMonth = calendarMonth.innerText.slice(0, -5)
const currentYear = calendarMonth.innerText.slice(-4)

const day = []
const today = []
const month = []
const thisMonth = []
const year = []
const thisYear = []

thisYear.push(currentYear)
changeNameToNumber(currentMonth)

function saveCalendarDate() {
  for(let i = 0; i < calendarDay.length; i++) {

    // -> ADD DAY AND TODAY
    calendarDay[i].addEventListener('mousedown', () => {
      let selectedDay = calendarDay[i].innerText
      selectedDay = selectedDay.padStart(2, '0')
      day.splice(0, 1, selectedDay)
      today.splice(0, 1, currentDay)
    })

    // -> ADD MONTH AND YEAR
    calendarDay[i].addEventListener('click', () => {
      let selectedMonth = calendarMonth.innerText
      year.splice(0, 1, selectedMonth.slice(-4))
      changeNameToNumber(selectedMonth.slice(0, -5))
      verifyAndSetDate()
    })
  }
}
saveCalendarDate()

function changeNameToNumber(monthName) {
  let monthNumber = ''

  switch(monthName) {
    case 'janeiro':
      monthNumber = '01'
      break;
    case 'fevereiro':
      monthNumber = '02'
      break;
    case 'março':
      monthNumber = '03'
      break;
    case 'abril':
      monthNumber = '04'
      break;
    case 'maio':
      monthNumber = '05'
      break;
    case 'junho':
      monthNumber = '06'
      break;
    case 'julho':
      monthNumber = '07'
      break;
    case 'agosto':
      monthNumber = '08'
      break;
    case 'setembro':
      monthNumber = '09'
      break;
    case 'outubro':
      monthNumber = '10'
      break;
    case 'novembro':
      monthNumber = '11'
      break;
    case 'dezembro':
      monthNumber = '12'
      break;
  }

  if (thisMonth.length == 0) {
    thisMonth.push(monthNumber)
  }
  if (month.length == 0) {
    month.push(monthNumber)
  }
  else {
    month.splice(0, 1, monthNumber)
  }
}

function verifyAndSetDate() {
  let todayNumber = parseInt(today)
  let dayNumber = parseInt(day)
  let thisMonthNumber = parseInt(thisMonth)
  let monthNumber = parseInt(month)
  let thisYearNumber = parseInt(thisYear)
  let yearNumber = parseInt(year)

  if (yearNumber >= thisYearNumber && monthNumber == thisMonthNumber && dayNumber > todayNumber) {
    console.log('Pode agendar')
  }
  else if (yearNumber >= thisYearNumber && monthNumber > thisMonthNumber) {
    console.log('Pode agendar')
  }
  else if (yearNumber > thisYearNumber) {
    console.log('Pode agendar')
  }
  else {
    console.log('Não pode agendar')
  }

/*
  const todayDate = `${yearNumber}/${thisMonthNumber}/${todayNumber}`
  console.log(todayDate)

  const dateDisplay = document.querySelector('.show-date');
  const localDate = dateDisplay.textContent = `${dayNumber}/${monthNumber}/${yearNumber}`
  sessionStorage.setItem('localDate', localDate)

  const finalDate = `${yearNumber}/${monthNumber}/${dayNumber}`
  sessionStorage.setItem('date', finalDate)
  console.log('FINAL:' + finalDate)
*/
}

function goBack() {
  window.location.href = '/calendar.html'
}

function toMyAppointments() {
  window.location.href = '/appointments.html'
}
