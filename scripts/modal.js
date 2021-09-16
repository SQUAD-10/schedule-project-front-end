const modalWrapper = document.querySelector('.modal-wrapper')

// APPOINTMENT PAGE MODAL
function modalDelete(data) {
  modalWrapper.classList.add('active')

  const tag = document.querySelector('.white-tag')
  tag.innerHTML = `
    <h2>EXCLUIR AGENDAMENTO</h2>
    <p>Deseja excluir este agendamento?</p>
    <div class="option-buttons">
      <button class="btn-cancel">NÃO</button>
      <button class="btn-confirm">SIM</button>
    </div>
  `
  const cancelButton = document.querySelector('.btn-cancel')
  const confirmButton = document.querySelector('.btn-confirm')

  cancelButton.addEventListener('click', () => {
    modalClose()
  })
  confirmButton.addEventListener('click', () => {
    deleteAppointment(data)
  })
}

//CALENDAR PAGE MODAL
function modalRegister() {
  modalWrapper.classList.add('active')
  const verifiedResult = verifyAndSetDate()

  if (verifiedResult == false) {
    const tag = document.querySelector('.white-tag')
    tag.innerHTML = `
      <h2>DATA INVÁLIDA</h2>
      <img class="modal-img" src="../images/x-circle.svg"/>
      <p>Não é possível agendar para ${showDateToday} ou datas anteriores</p>
      <div class="option-buttons">
        <button class="btn-ok">OK</button>
      </div>
    `

    const btnOK = document.querySelector('.btn-ok')
    btnOK.addEventListener('click', () => {
      modalClose()
    })
  }

  else {
    let city = ''
    sessionStorage.place == 'santos' ? city = 'Santos' : city = 'São Paulo'

    const tag = document.querySelector('.white-tag')
    const chosenDate = showDate()
    tag.innerHTML = `
      <h2>CONFIRMAR AGENDAMENTO</h2>
      <p class="details">Confirmar agendamento para o dia ${chosenDate} na unidade ${city}?</p>
      <div class="option-buttons">
        <button class="btn-cancel">NÃO</button>
        <button class="btn-confirm">SIM</button>
      </div>
    `
    const cancelButton = document.querySelector('.btn-cancel')
    const confirmButton = document.querySelector('.btn-confirm')

    cancelButton.addEventListener('click', () => {
      modalClose()
    })
    confirmButton.addEventListener('click', () => {
      setAppointment()
      modalConfirmation()
    })
  }
}

//CALENDAR PAGE APPOINTMENT CONFIRMATION
function modalConfirmation() {
  const tag = document.querySelector('.white-tag')
  const chosenDate = showDate()
  tag.innerHTML = `
    <h2>CONFIRMADO</h2>
    <p>Seu agendamento foi confirmado com sucesso</p>
    <img class="modal-img" src="../images/check-circle.svg"/>
    <div class="option-buttons">
      <button class="btn-ok">OK</button>
    </div>
  `
  const btnOK = document.querySelector('.btn-ok')
  btnOK.addEventListener('click', () => {
    modalClose()
  })
}

function modalClose() {
  modalWrapper.classList.remove('active')
}
