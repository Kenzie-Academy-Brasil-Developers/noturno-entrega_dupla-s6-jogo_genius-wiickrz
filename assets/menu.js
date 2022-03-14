const menu = document.querySelector(".menu");
const scoreList = document.getElementById("scoreList");
const liList = document.querySelector(".liClass");
let menuOpen = false;
menu.addEventListener("click", () => {
  if (!menuOpen) {
    menu.classList.add("open");
    scoreList.className = "listScore";
    menuOpen = true;
    addHistoryToMenu();
  } else {
    menu.classList.remove("open");
    ulHistory.innerHTML = "";
    scoreList.className = "scored-list";
    menuOpen = false;
  }
});
