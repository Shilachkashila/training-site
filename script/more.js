'use strict';


// Get the button открывающая кнопка имя переменной

const visible = document.getElementById("cardsVisible");
const icon = document.getElementById("btnIcon");
const cardsHeight = document.getElementById("cards");
const btn = document.getElementById("more");

// console.log(cardsHeight.clientHeight)
//clientHeight - контент вместе с падингами
   if (cardsHeight.clientHeight <= 515) {
    btn.style.display = "none";
   }

// When the user clicks on the button,меняется класс елемента

 function changeIcon() {

  if (icon.className == 'fa fa-chevron-down') {icon.className = 'fa fa-chevron-up';
}
  else{
  icon.className = 'fa fa-chevron-down';
}
}

function changeSize() {

  if (visible.className == 'cards__visible_full') {visible.className = 'cards__visible';
}
  else{
  visible.className = 'cards__visible_full';
}
}

//btn.addEventListener("click", changeSize);
//btn.addEventListener("click", changeIcon);

// попытка использовать стрелочную функцию. Всё работает.Недостатки метода проверим позже.

// elem.addEventListener('click',() => {
// doSomething();
//     doSomething2();
// });

btn.addEventListener('click',() => {
     changeSize();
     changeIcon();
});
