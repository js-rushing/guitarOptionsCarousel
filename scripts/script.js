/*  const BODY comes from ./body.js
 *   const PICKGUARD comes from ./pickguard.js
 *   const PICKUPS comes from ./pickups.js
 *   const bodyColors comes from ./colorScheme.js
 */

const bodyImg = document.querySelector('#body')
const pgImg = document.querySelector('#pickguard')
const pickupSelectors = document.querySelectorAll('input[name=pickup-selector]')

/* PREV/NEXT BUTTONS */
const bodyPrev = document.querySelector('#body-prev')
const bodyNext = document.querySelector('#body-next')
const pgPrev = document.querySelector('#pg-prev')
const pgNext = document.querySelector('#pg-next')

/* RESET BUTTON */
const resetBtn = document.querySelector('#reset')

var currentBodyColorIndex = 0
var currentPgColorIndex = 0
var currentPickupColorIndex = 0

/* INITIALIZE BODY AND PICKGUARD OPTIONS */
changePgColor(pgColors[currentPgColorIndex].hex)
changeBodyColor(currentBodyColorIndex)

/* EVENT LISTENERS */
bodyPrev.addEventListener('click', decBodyColor)
bodyNext.addEventListener('click', incBodyColor)
pgPrev.addEventListener('click', decPgColor)
pgNext.addEventListener('click', incPgColor)

pickupSelectors.forEach((selector) => {
  selector.addEventListener('input', changePickupColor)
})

resetBtn.addEventListener('click', () => {
  currentBodyColorIndex = 0
  currentPgColorIndex = 0
  changeBodyColor(currentBodyColorIndex)
  changePgColor(pgColors[currentPgColorIndex].hex)
  pickupSelectors[0].checked = true
  changePickupColor()
})

/* FUNCTIONS */
function decBodyColor() {
  currentBodyColorIndex > 0
    ? currentBodyColorIndex--
    : (currentBodyColorIndex = bodyColors.length - 1)
  changeBodyColor(currentBodyColorIndex)
}

function incBodyColor() {
  currentBodyColorIndex < bodyColors.length - 1
    ? currentBodyColorIndex++
    : (currentBodyColorIndex = 0)
  changeBodyColor(currentBodyColorIndex)
}

function decPgColor() {
  currentPgColorIndex > 0
    ? currentPgColorIndex--
    : (currentPgColorIndex = pgColors.length - 1)

  changePgColor(pgColors[currentPgColorIndex].hex)
}

function incPgColor() {
  currentPgColorIndex < pgColors.length - 1
    ? currentPgColorIndex++
    : (currentPgColorIndex = 0)

  changePgColor(pgColors[currentPgColorIndex].hex)
}

function changeBodyColor(newColorIndex) {
  if (bodyImg.innerHTML === '') {
    bodyImg.innerHTML = BODY
  }

  const bodySVGShape1 = document.querySelector('#body-1')
  const newColor = bodyColors[newColorIndex].hex
  const bodyColorDisplay = document.querySelector('#body-color')

  bodyColorDisplay.innerText = bodyColors[currentBodyColorIndex].name

  bodySVGShape1.style.fill = newColor
  bodySVGShape1.style.stroke = newColor
}

function changePgColor(fill, stroke) {
  if (pgImg.innerHTML === '') {
    pgImg.innerHTML = PICKGUARD
  }

  const pgColorDisplay = document.querySelector('#pg-color')
  const pgSVGShape1 = document.querySelector('#pg-1')

  if (!stroke) {
    stroke = fill
  }

  pgColorDisplay.innerText = pgColors[currentPgColorIndex].name

  pgSVGShape1.style.fill = fill
  pgSVGShape1.style.stroke = stroke
}

function changePickupColor(e) {
  const pickupImg = document.querySelector('#pickups')
  const pickupImgSrc = pickupImg.src

  let newPickupColor
  
  e ? (newPickupColor = e.target.value) : (newPickupColor = 'white')
  
  let oldPickupColor = PICKUPS[currentPickupColorIndex]


  pickupImg.src = pickupImgSrc.replace(oldPickupColor, newPickupColor)
  
  currentPickupColorIndex = PICKUPS.indexOf(newPickupColor)
}
