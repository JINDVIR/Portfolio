function openMenu() {
    var menuBox = document.getElementById("menuBox");
    menuBox.style.display = "block";
    var hide = document.body;
    hide.style.overflow = "hidden";
  }
function closeMenu() {
    var menuBox = document.getElementById("menuBox");
    menuBox.style.display = "none";
    var hide = document.body;
    hide.style.overflow = "scroll";
  }