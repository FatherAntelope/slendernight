const preloader = document.querySelector(".preloader");
const wrapper = document.querySelector(".wrapper");
window.addEventListener("load", function () {
    setTimeout(() => {
        preloader.style.display = "none";
        wrapper.classList.remove("hidden");
    }, 1000);
});