const menubtn = document.getElementById("menubtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function () {
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px";
  } else {
    sidebar.style.left = "0px";
  }
});