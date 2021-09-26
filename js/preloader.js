const preloader = document.querySelector(".preloader");
const wrapper = document.querySelector(".wrapper");
window.addEventListener("load", function () {
    wrapper.classList.remove("hidden");
    preloader.classList.add("fade-out");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 1000);
});