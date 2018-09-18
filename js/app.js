const handle = document.querySelector(".menu");
const activate = document.querySelector(".dropdown-content");

handle.addEventListener("click", () => {
    activate.classList.toggle("show");
});

