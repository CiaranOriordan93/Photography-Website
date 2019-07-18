const handle = document.querySelector(".menu");
const mobileDropdown = document.querySelector(".dropdown-content");
const featuresHandle = document.querySelector(".features-menu");
const featuresMenu = document.querySelector(".features-dropdown");

handle.addEventListener("click", () => mobileDropdown.classList.toggle("show"));

featuresHandle.addEventListener("click", () =>
  featuresMenu.classList.toggle("remove")
);

featuresMenu.addEventListener("mouseout", () =>
  featuresMenu.classList.toggle("remove")
);
