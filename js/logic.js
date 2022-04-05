$ = (id) => document.getElementById(id);
let users = ["Luci", "Juan", "Pepito"];
let modal = $("userNotFoundModal");
let span = document.getElementsByClassName("close")[0];

$("searchBtn").onclick = function () {
  if (users.includes($("userInput").value)) {
  } else {
    modal.style.display = "block";
  }
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";}
};

