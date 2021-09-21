const burgerMenuItem = document.querySelector(".header__menu-burger");
const menuItem = document.querySelector(".header__menu-list");
const headerItem = document.querySelector(".header");
const notifyCloses = document.getElementsByClassName("notify__close");
const notifyButtonsShow = document.getElementsByClassName("notify-show");
let timer;

if(notifyCloses.length > 0) {
    for (let notifyClose of notifyCloses) {
        notifyClose.addEventListener("click", function (e) {
            this.parentElement.classList.remove("active");
            timer = null;
        });
    }
}

if(notifyButtonsShow.length > 0) {
    for (let notifyButtonShow of notifyButtonsShow) {
        notifyButtonShow.addEventListener("click", function () {
            const notify = document.querySelector(this.dataset.target);
            notify.classList.add("active");
            if(!timer) {
                timer = setTimeout(() => {
                    if (notify.classList.contains("active")) {
                        notify.classList.remove("active");
                        timer = null;
                    }
                }, 3000);
            }
        });
    }
}

burgerMenuItem.addEventListener("click", () => {
    burgerMenuItem.classList.toggle("active");
    menuItem.classList.toggle("active");
    if(!document.querySelector(".modal.active"))
        document.body.classList.toggle("scroll-lock");
});

window.addEventListener("scroll", function () {
    let scrolled = this.scrollY;
    if (scrolled > 60) {
        headerItem.classList.remove("header__transparent");
    } else {
        headerItem.classList.add("header__transparent");
    }
});

function copyToClipboard(value) {
    const el = document.createElement('textarea');
    el.value = value;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}


