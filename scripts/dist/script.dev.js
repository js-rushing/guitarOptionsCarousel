"use strict";

/*  const BODY comes from ./body.js
 *   const PICKGUARD comes from ./pickguard.js
 *   const PICKUPS comes from ./pickups.js
 *   const bodyColors comes from ./colorScheme.js
 */
var bodyImg = document.querySelector('#body');
var pgImg = document.querySelector('#pickguard');
var pickupSelectors = document.querySelectorAll('input[name=pickup-selector]');
/* PREV/NEXT BUTTONS */

var bodyPrev = document.querySelector('#body-prev');
var bodyNext = document.querySelector('#body-next');
var pgPrev = document.querySelector('#pg-prev');
var pgNext = document.querySelector('#pg-next');
/* RESET BUTTON */

var resetBtn = document.querySelector('#reset');
var currentBodyColorIndex = 0;
var currentPgColorIndex = 0;
var currentPickupColorIndex = 0;
/* INITIALIZE BODY AND PICKGUARD OPTIONS */

changePgColor(pgColors[currentPgColorIndex].hex);
changeBodyColor(currentBodyColorIndex);
/* EVENT LISTENERS */

bodyPrev.addEventListener('click', decBodyColor);
bodyNext.addEventListener('click', incBodyColor);
pgPrev.addEventListener('click', decPgColor);
pgNext.addEventListener('click', incPgColor);
pickupSelectors.forEach(function (selector) {
  selector.addEventListener('input', changePickupColor);
});
resetBtn.addEventListener('click', function () {
  currentBodyColorIndex = 0;
  currentPgColorIndex = 0;
  changeBodyColor(currentBodyColorIndex);
  changePgColor(pgColors[currentPgColorIndex].hex);
  pickupSelectors[0].checked = true;
  changePickupColor();
});
/* FUNCTIONS */

function decBodyColor() {
  currentBodyColorIndex > 0 ? currentBodyColorIndex-- : currentBodyColorIndex = bodyColors.length - 1;
  changeBodyColor(currentBodyColorIndex);
}

function incBodyColor() {
  currentBodyColorIndex < bodyColors.length - 1 ? currentBodyColorIndex++ : currentBodyColorIndex = 0;
  changeBodyColor(currentBodyColorIndex);
}

function decPgColor() {
  currentPgColorIndex > 0 ? currentPgColorIndex-- : currentPgColorIndex = pgColors.length - 1;
  changePgColor(pgColors[currentPgColorIndex].hex);
}

function incPgColor() {
  currentPgColorIndex < pgColors.length - 1 ? currentPgColorIndex++ : currentPgColorIndex = 0;
  changePgColor(pgColors[currentPgColorIndex].hex);
}

function changeBodyColor(newColorIndex) {
  if (bodyImg.innerHTML === '') {
    bodyImg.innerHTML = BODY;
  }

  var bodySVGShape1 = document.querySelector('#body-1');
  var newColor = bodyColors[newColorIndex].hex;
  var bodyColorDisplay = document.querySelector('#body-color');
  bodyColorDisplay.innerText = bodyColors[currentBodyColorIndex].name;
  bodySVGShape1.style.fill = newColor;
  bodySVGShape1.style.stroke = newColor;
}

function changePgColor(fill, stroke) {
  if (fill[0] === '-') {
    pgImg.innerHTML = "\n      <img src=\"./images/yamahaPacifica-pickguard".concat(fill, "\" class=\"guitar_pickguard\">\n    ");
  } else {
    pgImg.innerHTML = PICKGUARD;
    var pgColorDisplay = document.querySelector('#pg-color');
    var pgSVGShape1 = document.querySelector('#pg-1');
    pgSVGShape1.style.fill = fill;
    pgSVGShape1.style.stroke = stroke;

    if (!stroke) {
      stroke = fill;
    }

    pgColorDisplay.innerText = pgColors[currentPgColorIndex].name;
  }
}

function changePickupColor(e) {
  var pickupImg = document.querySelector('#pickups');
  var pickupImgSrc = pickupImg.src;
  var newPickupColor;
  e ? newPickupColor = e.target.value : newPickupColor = 'white';
  var oldPickupColor = PICKUPS[currentPickupColorIndex];
  pickupImg.src = pickupImgSrc.replace(oldPickupColor, newPickupColor);
  currentPickupColorIndex = PICKUPS.indexOf(newPickupColor);
}