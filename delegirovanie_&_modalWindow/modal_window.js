"use strict";

const refs = {
    openModalBtn: document.querySelector('button[data-action="open-modal"'),
    closeModalBtn: document.querySelector('button[data-action="close-modal"'),
    modalBackdrop: document.querySelector(".js-backdrop"),
    body: document.body,
}

const handleKeyPress = e => {
    console.log("e: ", e);

    if (e.code !== "Escape") return;

    console.log("e.code: ", e.code);
    console.log("Escape was pressed!");

    closeModal();
}

const openModal = () => {
    refs.body.classList.add("modal-visible");
    window.addEventListener("keydown", handleKeyPress);
}

const closeModal = () => {
    refs.body.classList.remove("modal-visible");
    window.removeEventListener("keydown", handleKeyPress);
}

const handleBackdropClick = ({ target, currentTarget }) => {
    console.log("current Target: ", currentTarget);
    console.log("target: ", target);
    if (target !== currentTarget) return;

    closeModal();
}

refs.modalBackdrop.addEventListener("click", handleBackdropClick);
refs.openModalBtn.addEventListener("click", openModal);
refs.closeModalBtn.addEventListener("click", closeModal);