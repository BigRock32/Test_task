const flags = document.querySelectorAll('.flag');
const circle = document.querySelector('.big-circle');

const START_TIMEOUT = 3000;
const ANIMATE_TIMEOUT = 400;

function startAnimate() {
  flags.forEach((flag, i) => setTimeout(() => flag.classList.add('_active'), i * ANIMATE_TIMEOUT));
}

setTimeout(startAnimate, START_TIMEOUT);


function rotateFlags(){
   circle.classList.add('_active');
}
setTimeout(() => {
   rotateFlags();
}, 5500);


const search = document.getElementById('input')
const errorWarning = document.getElementById('error')
maxLengthTxt = "Max lenght = 12 characters"
minLengthTxt = "Min lenght = 5 characters"



let reg = /[\!\@\#\$\%\^\&\*\(\)]/g;
search.oninput = function(){
   this.value = this.value.replace(reg, '');
}


input.addEventListener('input', checkCodeLength)
input.setAttribute('maxLenth', input.maxLength + 1)

function checkCodeLength(){
   const enteredCodeLength = input.value.length
   const maxLength = input.maxLength
   const minLength = 5

   
   
   if (enteredCodeLength === maxLength) {
      errorWarning.hidden = false
      input.classList.add('error')
      errorWarning.textContent = `${maxLengthTxt}`
      input.value = input.value.slice(0, -1)
   } else {
      errorWarning.hidden = true
      input.classList.remove('error')
   }

   if (enteredCodeLength < minLength) {
      errorWarning.hidden = false
      input.classList.add('error')
      errorWarning.textContent = `${minLengthTxt}`
      
   } else {
      errorWarning.hidden = true
      input.classList.remove('error')

   }
}


//mobile menu

const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav-row');

burgerBtn.addEventListener('click', toggleMenu);

function burgerOpen(){
menu.classList.add('_active')
document.body.style.overflow = 'hidden'
}

function burgerClose(){
   menu.classList.remove('_active')
   document.body.style.overflow = 'auto'
   }

   function toggleMenu(e){
      if (menu.classList.contains('_active')) {
         burgerClose()
      } else {
         menu.style.opacity = 1
         burgerOpen()
      } 
   }