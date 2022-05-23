// slider start

const wrapper = document.querySelector(".wrapper");
const listSlider = document.getElementsByClassName("slider-img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
// const dotBtn = document.querySelectorAll(".fa-circle-dot");

nextBtn.addEventListener("click", () => {
  const widthEle = listSlider[0].clientWidth;
  wrapper.scrollBy(widthEle, 0);
});

prevBtn.addEventListener("click", () => {
  const widthEle = listSlider[0].clientWidth;
  wrapper.scrollBy(-widthEle, 0);
});

//slider end
