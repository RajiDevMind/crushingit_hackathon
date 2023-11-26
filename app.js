const svgTurn = document.querySelector(".svgturn");
const displayContent = document.querySelector(".display_content");
const svgbtn = document.querySelector(".svg_btn");
const svgbtns = document.querySelector(".svg_btn svg");

svgbtn.addEventListener("click", function () {
  displayContent.classList.toggle("display_content");
  svgbtn.style.transform = `rotate(${180}deg)`;
});

// trial
const removeTrial = document.querySelector(".removetrial");
const selectedPlan = document.querySelector(".selectplan");

removeTrial.addEventListener("click", function () {
  selectedPlan.classList.add("removeplan");
});

// shops
const removeHide = document.querySelectorAll(".hide");
const removeHide1 = document.querySelectorAll(".hide1");
// const circleBtn = document.querySelector(".circle_show");
const toggleBtns = document.querySelectorAll(".toggle_btn");
const toggleBtn1 = document.querySelectorAll(".toggle_btn1");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    removeHide.forEach((item, i) => {
      item.classList.toggle("hide");
    });
  });
});
toggleBtn1.forEach((btn) => {
  btn.addEventListener("click", function () {
    removeHide1.forEach((item, i) => {
      item.classList.toggle("hide1");
    });
  });
});
