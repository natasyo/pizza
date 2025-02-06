// Import our custom CSS
import "../scss/styles.scss";

// // Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

//
document.addEventListener("click", function (event) {
  const navbarCollapse = document.querySelector(".navbar-collapse.show"); // Открытое меню
  if (
    navbarCollapse &&
    // !navbarCollapse.contains(event.target) &&
    !event.target.closest(".navbar-toggler") &&
    !event.target.closest(".navbar-nav")
  ) {
    new bootstrap.Collapse(navbarCollapse).hide();
  }
});
