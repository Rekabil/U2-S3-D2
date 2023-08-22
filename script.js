window.onload = function () {
  document.getElementById("yourName").innerHTML = localStorage.getItem("user");
};
let tempo = 0;

const timer = () => {
  setInterval(function () {
    tempo++;
    sessionStorage.setItem("time", tempo);
    document.getElementById("timer").innerHTML = Math.floor(tempo / 1000);
  });
};
function inputName(event) {
  const name = document.getElementById("name").value;
  localStorage.setItem("user", name);
  document.getElementById("yourName").innerHTML = name;
}

function removeName(event) {
  localStorage.removeItem("user");
  document.getElementById("yourName").innerHTML = "";
}
timer();
