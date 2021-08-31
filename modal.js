// Для всех эффектов ховера и фокуса (цвет, фон, тень) сделаны переходы. Время - 250ms, функция распределения времени - cubic-bezier(0.4, 0, 0.2, 1).

const refs = {
    openModalBtn: document.querySelector("[data-open-modal]"),
    closeModalBtn: document.querySelector("[data-close-modal]"),
    backdrop: document.querySelector("[data-backdrop]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", LogBackdropClick);

function toggleModal(){
    refs.backdrop.classList.toggle("is-hidden");
}

function LogBackdropClick() {
    console.log();
}