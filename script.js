let grid = document.getElementById("right");
arr = Array.from(grid.children);
let attempt = 0;
let sessionData = sessionStorage.getItem("sessionData");
let data = [];
if (sessionData == null) {
  data = [];
} else {
  data = JSON.parse(sessionData);
}
console.log(data);
arr.forEach((element) => {
  if (
    element.querySelector("#cross").style.display != "block" ||
    element.querySelector("#tick").style.display != "block"
  ) {
    element.addEventListener("click", function (e) {
      // console.log(e.target);
      if (e.target in data) {
      } else {
        if (attempt % 2 != 0) {
          document.getElementById("turnDefine").innerText =
            "Player One's Turn:";

          element.querySelector("#cross").style.display = "block";
          element.style.background = "red";
          element.querySelector("#tick").style.display = "none";

          attempt = attempt + 1;
        } else {
          document.getElementById("turnDefine").innerText =
            "Player Two's Turn:";
          element.querySelector("#tick").style.display = "block";
          element.style.background = "blue";
          element.querySelector("#cross").style.display = "none";

          attempt = attempt + 1;
        }

        data.push(String( e.target));
        sessionStorage.setItem("sessionData", JSON.stringify(data));
      }
    });
  }
});
