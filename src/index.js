const navButton = document.querySelector("[aria-expanded]");
function toggleNav({ target }) {
  const expanded = target.getAttribute("aria-expanded") === "true" || false;
  target.setAttribute("aria-expanded", !expanded);
}
console.log(navButton);

navButton.addEventListener("click", toggleNav);
