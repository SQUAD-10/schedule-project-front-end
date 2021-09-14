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
const calendarDaySelected = document.querySelectorAll('.cal-day__day--selected');
const calendarMonth = document.querySelector('.cal-month__current')
//console.log(calendarDayToday[0])
//console.log(calendarMonth)

const day = []
const today = []
const month = []
const monthNow = calendarMonth.innerText.slice(0, -5)
const year = []

function saveCalendarDate() {
  for(let i = 0; i < calendarDay.length; i++) {

    // -> ADD DAY
    calendarDay[i].addEventListener('mousedown', () => {
      let selectDay = calendarDay[i].innerText
      selectDay = selectDay.padStart(2, '0')
      day.splice(0, 1, selectDay)

      let selectToday = calendarDayToday[0].innerText
      today.splice(0, 1, selectToday)
    })

    // -> ADD MONTH AND YEAR
    calendarDay[i].addEventListener('click', () => {
      let selectMonth = calendarMonth.innerText
      year.splice(0, 1, selectMonth.slice(-4))
      changeNameToNumber(selectMonth.slice(0, -5), monthNow)
    })
  }
}
saveCalendarDate()

function changeNameToNumber(selectedMonth, currentMonth) {
  let selectedMonthNumber = ''
  let currentMonthNumber = ''

  if(selectedMonth || currentMonth == 'janeiro') {
    selectedMonthNumber = selectedMonth.replace(selectedMonth, '01')
    currentMonthNumber = currentMonth.replace(currentMonth, '01')
  }
  else if (selectedMonth || currentMonth == 'fevereiro') {
    selectedMonthNumber = selectedMonth.replace(selectedMonth, '02')
    currentMonthNumber = currentMonth.replace(currentMonth, '02')
  }
  else if (selectedMonth || currentMonth == 'março') {
    selectedMonthNumber = selectedMonth.replace(selectedMonth, '03')
    currentMonthNumber = currentMonth.replace(currentMonth, '03')
  }
  else if (selectedMonth || currentMonth == 'abril') {
    selectedMonthNumber = selectedMonth.replace(selectedMonth, '04')
    currentMonthNumber = currentMonth.replace(currentMonth, '04')
  }
  else if (selectedMonth || currentMonth == 'maio') {
    selectedMonthNumber = selectedMonth.replace(selectedMonth, '05')
    currentMonthNumber = currentMonth.replace(currentMonth, '05')
  }
  else if (selectedMonth || currentMonth == 'junho') {
    selectedMonthNumber = selectedMonth.replace(selectedMonth, '06')
    currentMonthNumber = currentMonth.replace(currentMonth, '06')
  }
  else if (selectedMonth || currentMonth == 'julho') {
    selectedMonthNumber = selectedMonth.replace(selectedMonth, '07')
    currentMonthNumber = currentMonth.replace(currentMonth, '07')
  }
  else if (selectedMonth || currentMonth == 'agosto') {
    selectedMonthNumber = selectedMonth.replace(selectedMonth, '08')
    currentMonthNumber = currentMonth.replace(currentMonth, '08')
  }
  else if (selectedMonth || currentMonth == 'setembro') {
    selectedMonthNumber = selectedMonth.replace(selectedMonth, '09')
    currentMonthNumber = currentMonth.replace(currentMonth, '09')
  }
  else if (selectedMonth || currentMonth == 'outubro') {
    selectedMonthNumber = selectedMonth.replace(selectedMonth, '10')
    currentMonthNumber = currentMonth.replace(currentMonth, '10')
  }
  else if (selectedMonth || currentMonth == 'novembro') {
    selectedMonthNumber = selectedMonth.replace(selectedMonth, '11')
    currentMonthNumber = currentMonth.replace(currentMonth, '11')
  }
  else if (selectedMonth || currentMonth == 'dezembro') {
    selectedMonthNumber = selectedMonth.replace(selectedMonth, '12')
    currentMonthNumber = currentMonth.replace(currentMonth, '12')
  }
  month.splice(0, 1, selectedMonthNumber)
  verifyAndSetDate(currentMonthNumber)
}

function verifyAndSetDate(currentMonthNumber) {
  let thisMonth = currentMonthNumber
  thisMonth = parseInt(thisMonth)

  const dayNum = parseInt(day[0])
  const monthNum = parseInt(month[0])
  const todayNum = parseInt(today[0])

  if (dayNum > todayNum && monthNum <= thisMonth) {
    console.log('Good')
  }
  else {
    console.log('Bad')
  }
  const dateDisplay = document.querySelector('.show-date');
  const localDate = dateDisplay.textContent = `${day}/${month}/${year}`
  sessionStorage.setItem('localDate', localDate)

  const finalDate = `${year}/${month}/${day}`
  sessionStorage.setItem('date', finalDate)
  console.log(finalDate)
}

function goBack() {
  window.location.href = '/calendar.html'
}

function toMyAppointments() {
  window.location.href = '/appointments.html'
}
