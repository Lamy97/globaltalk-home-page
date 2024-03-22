document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("header");
  const ul = document.querySelector(".Home .Textbook .Statistics .Games");

  // Corrected: Removed redundant burgerBtn variable

  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("show-menu");
    ul.classList.toggle("unhide-menu");
    /* Corrected: Toggle "fixed" class on menuBtn itself */
    menuBtn.classList.toggle("fixed");
  });

  // Corrected: Listener on the document body, not .container
  document.body.addEventListener("click", function () {
    // Close the menu when clicking outside both nav and menuBtn
    if (!event.target.closest("header, .menu-btn")) {
      nav.classList.remove("show-menu");
      ul.classList.remove("unhide-menu");
      menuBtn.classList.remove("fixed");
    }
  });
});
