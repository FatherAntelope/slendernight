const modalLinks = document.getElementsByClassName("modal-show");
const bodyElement = document.querySelector("body");
const headerElement = document.querySelector(".header");
const closesModal = document.getElementsByClassName("close-modal");
const timeout = 100;
let unlock = true;

if(modalLinks.length > 0) {
    for (let modalLink of modalLinks) {
        modalLink.addEventListener("click", function (e) {
           const modalId = modalLink.getAttribute("href").replace('#', '');
           const currentModal = document.getElementById(modalId);
           modalShow(currentModal);
           e.preventDefault();
        });
    }
}

if(closesModal.length > 0) {
    for (let closeModal of closesModal) {
        closeModal.addEventListener("click", function (e) {
           modalClose(closeModal.closest(".modal"));
           e.preventDefault()
        });
    }
}

function modalShow(currentModal) {
    if(currentModal && unlock) {
        const modalActive = document.querySelector('.modal.active');
        if(modalActive) {
            modalClose(modalActive, false);
        } else {
            bodyLock();
        }
        currentModal.classList.add("active");
        currentModal.addEventListener("click", function (e) {
           if(!e.target.closest(".modal__content")) {
               modalClose(e.target.closest(".modal"));
           }
        });
    }
}

function modalClose(modalActive, doUnlock = true) {
    if(unlock) {
        modalActive.classList.remove("active");
        if(doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    bodyElement.style.paddingRight = lockPaddingValue;
    headerElement.style.paddingRight = lockPaddingValue;
    bodyElement.classList.add("scroll-lock");

    unlock = false;
    setTimeout(() => {
       unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(() => {
        bodyElement.style.paddingRight = '0px';
        headerElement.style.paddingRight = '0px';
        if(
            bodyElement.classList.contains("scroll-lock")
            && !document.querySelector(".header__menu-burger").classList.contains("active")
        ) {
            bodyElement.classList.remove("scroll-lock");
        }
    }, timeout);

    unlock = false;
    setTimeout(()=> {
        unlock = true;
    }, timeout);
}