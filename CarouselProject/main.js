const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const li = document.getElementsByTagName("li");
const img = document.getElementById("image");

const arrUrl = [
  "./img/a1.jpg",
  "./img/a2.jpg",
  "./img/a3.jpg",
  "./img/a4.jpg",
  "./img/a5.jpg",
];

let a = 0;

function buttonHidden() {
  prevButton.style.opacity = "1";
  nextButton.style.opacity = "1";
  if (a < 1 || a > 3) {
    if (a < 1) {
      prevButton.style.opacity = "0";
      return;
    } else if (a > 3) {
      nextButton.style.opacity = "0";
      return;
    }
  }
}

buttonHidden();

function clearBorder() {
  li[a].style.fontWeight = "";
  li[a].style.borderBottom = "none";
}

function borderAndImgRender() {
  img.src = arrUrl[a];
  li[a].style.fontWeight = 900;
  li[a].style.borderBottom = "3px black solid";
  buttonHidden();
}
borderAndImgRender();

function prevPicture() {
  if (a < 1) return;
  clearBorder();
  a--;
  borderAndImgRender();
}
function nextPicture() {
  if (a > 3) return;
  clearBorder();
  a++;
  borderAndImgRender();
}

for (let key of li) {
  key.addEventListener("click", (e) => {
    clearBorder();
    a = e.target.innerText - 1;
    borderAndImgRender();
  });
}

nextButton.addEventListener("click", nextPicture);
prevButton.addEventListener("click", prevPicture);
