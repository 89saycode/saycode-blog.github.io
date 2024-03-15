const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

let isOpen = false;

menuToggle.addEventListener("click", () => {
  if (isOpen) {
    menuToggle.innerHTML = "&#9776;"; // 切换回菜单图标
    menu.classList.remove("open");
  } else {
    menuToggle.innerHTML = "✕"; // 切换成 "x"
    menu.classList.add("open");
  }
  isOpen = !isOpen;
});
