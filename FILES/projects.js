
const menu = document.getElementById("menu");

function openMenu() {
    var menuBox = document.getElementById("menuBoxProj");
    menuBox.style.display = "block";
    var hide = document.body;
    hide.style.overflow = "hidden";
  }
function closeMenu() {
    var menuBox = document.getElementById("menuBoxProj");
    menuBox.style.display = "none";
    var hide = document.body;
    hide.style.overflow = "scroll";
  }


