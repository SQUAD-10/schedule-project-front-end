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
