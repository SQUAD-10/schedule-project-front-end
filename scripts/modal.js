function modalDelete(data) {
  const modalWrapper = document.querySelector(".modal-wrapper")
  modalWrapper.classList.add("active")

  const cancelButton = document.querySelector(".btn-cancel")
  const confirmButton = document.querySelector(".btn-confirm")

  cancelButton.addEventListener("click", () => {
    modalDeleteClose()
  })
  confirmButton.addEventListener("click", () => {
    deleteAppointment(data)
  })

  function modalDeleteClose() {
    modalWrapper.classList.remove("active")
  }
}

function modalRegister() {
  const verifiedResult = verifyAndSetDate()

  if (verifiedResult == false) {
    const modal = document.querySelector('.modal')
    const tag = document.querySelector('.white-tag')
    modal.classList.add("small")
    tag.innerHTML = `
      <p>Não é possível agendar datas anteriores a ${showDateTomorrow}</p>
      <div class="option-buttons">
        <button class="btn-ok">OK</button>
      </div>`
    const btnOK = document.querySelector('.btn-ok')
    btnOK.addEventListener('click', () => {
      modalRegisterClose()
    })
  }
  else {

  }

  const modalWrapper = document.querySelector(".modal-wrapper")
  modalWrapper.classList.add("active")



  const cancelButton = document.querySelector(".btn-cancel")
  const confirmButton = document.querySelector(".btn-confirm")

  cancelButton.addEventListener("click", () => {
    modalRegisterClose()
  })
  confirmButton.addEventListener("click", () => {
    setAppointment()
  })


  window.setTimeout( () => {
    modalRegisterClose()}, 3000)

  function modalRegisterClose() {
    modalWrapper.classList.remove("active")
  }
}
