console.log(
  '%cWelcome to leightondarkins.com :)',
  'color: red; font-size: 24px'
);

let IMAGE_COUNT = 3;

(function () {
  changeLinkColors();

  setInterval(changeImage, 2500);
  setInterval(changeLinkColors, 5000);
})();

function changeImage() {
  let logo = document.getElementById('Logo');

  logo.src = `./images/${getRandomIntInRange()}.jpg`;
}

function getRandomIntInRange(max = IMAGE_COUNT) {
  return Math.floor(Math.random() * Math.floor(max));
}

function changeLinkColors() {
  let colors = ['#24d05a', '#eb4888', '#10a2f5', '#e9bc3f'];

  Array.from(document.querySelectorAll('a')).forEach((e) => {
    let rand = getRandomIntInRange(colors.length);

    e.style = `color: ${colors[rand]}`;
  });
}

function setColorHoverListener() {
  Array.from(document.querySelectorAll('a')).forEach((e) => {
    e.addEventListener('mouseover', changeLinkColors);
  });
}

setColorHoverListener();
