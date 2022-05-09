$ = (id) => document.getElementById(id);
let users = ["52368795", "Juan", "Pepito"];
let modal = $("userNotFoundModal");
//let span = document.getElementsByClassName("close")[0];

$("searchBtn").onclick = function () {
 // if (users.includes($("userInput").value)) {}
  if (users == "52368795"){

  }else if(users == "1001235478"){

  }else if(users == "25413574"){
    
  }else if(users == "1007203506"){
    
  }else {
    modal.style.display = "block";
}

}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";}
};