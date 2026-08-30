/* =========================================
   MOBILE NAVIGATION
========================================= */

const toggle = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav");


toggle.addEventListener("click", () => {

  const open = nav.classList.toggle("open");

  toggle.setAttribute(
    "aria-expanded",
    open
  );

});



/* =========================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================= */

document
  .querySelectorAll(".nav a")
  .forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

    });

  });



/* =========================================
   AUTOMATIC COPYRIGHT YEAR
========================================= */

document.getElementById("year").textContent =
  new Date().getFullYear();