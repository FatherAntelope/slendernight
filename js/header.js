const headerItem = document.querySelector(".header");
const burgerMenuItem = document.querySelector(".header__menu-burger");
const menuItem = document.querySelector(".header__menu-list");

if(headerItem.classList.contains("header-animation")) {
    window.addEventListener("scroll", function () {
        let scrolled = this.scrollY;
        if (scrolled > 60) {
            headerItem.classList.remove("header__transparent");
        } else {
            headerItem.classList.add("header__transparent");
        }
    });
}

burgerMenuItem.addEventListener("click", () => {
    burgerMenuItem.classList.toggle("active");
    menuItem.classList.toggle("active");
    if (!document.querySelector(".modal.active"))
        document.body.classList.toggle("scroll-lock");
});