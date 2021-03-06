function saveUser() {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  sessionStorage.setItem('name', name)
  sessionStorage.setItem('email', email)
  window.location.href = '/calendar.html'
}

function savePlace() {
  const place = document.querySelector('.select').value;
  sessionStorage.setItem('place', place)

  const btnSend = document.querySelector('#btn-send')
  btnSend.setAttribute('type', 'button')
  btnSend.addEventListener('click', () => {
    modalRegister()
  })

  const btnAgenda = document.querySelector('#btn-agenda')
  btnAgenda.setAttribute('type', 'button')
  btnAgenda.addEventListener('click', () => {
    toMyAppointments()
  })

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
today.push(currentDay)
changeNameToNumber(currentMonth)


function saveCalendarDate() {
  for(let i = 0; i < calendarDay.length; i++) {

    // -> ADD DAY AND TODAY
    calendarDay[i].addEventListener('mousedown', () => {
      let selectedDay = calendarDay[i].innerText
      selectedDay = selectedDay.padStart(2, '0')
      day.splice(0, 1, selectedDay)
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

const showDateToday = `${today}/${thisMonth}/${thisYear}`
sessionStorage.setItem('dateToday', showDateToday)

function setProfile() {
  const helloUser = document.querySelector('.hello')
  const userEmail = document.querySelector('.email')
  const dateToday = document.querySelector('.today')

  helloUser.textContent = `Ol??, ${sessionStorage.name}`
  userEmail.textContent = `${sessionStorage.email}`
  dateToday.innerHTML = `<img src="../images/calendar.svg"/> ${sessionStorage.dateToday}`
}
setProfile()

function changeNameToNumber(monthName) {
  let monthNumber = ''

  switch(monthName) {
    case 'janeiro':
      monthNumber = '01'
      break;
    case 'fevereiro':
      monthNumber = '02'
      break;
    case 'mar??o':
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

  let verifiedResult = ''
  const calendarDaySelected = document.querySelector('.cal-day__day--selected')

  if (yearNumber >= thisYearNumber && monthNumber == thisMonthNumber && dayNumber > todayNumber) {
    verifiedResult = true
    setDate()
    calendarDaySelected.removeAttribute('style', 'filter: grayscale()')
  }
  else if (yearNumber >= thisYearNumber && monthNumber > thisMonthNumber) {
    verifiedResult = true
    setDate()
    calendarDaySelected.removeAttribute('style', 'filter: grayscale()')
  }
  else if (yearNumber > thisYearNumber) {
    verifiedResult = true
    setDate()
    calendarDaySelected.removeAttribute('style', 'filter: grayscale()')
  }
  else {
    verifiedResult = false
    calendarDaySelected.setAttribute('style', 'filter: grayscale()')
  }
  showDate()
  return verifiedResult
}

function showDate() {
  const dateDisplay = document.querySelector('.show-date');
  if (day.length > 0) {
    const localDate = dateDisplay.textContent = `${day}/${month}/${year}`
    sessionStorage.setItem('localDate', localDate)

    return localDate
  }
}

function setDate() {
  const finalDate = `${year}/${month}/${day}`
  sessionStorage.setItem('date', finalDate)
}

function goBack() {
  window.location.href = '/calendar.html'
}

function toMyAppointments() {
  window.location.href = '/appointments.html'
}
