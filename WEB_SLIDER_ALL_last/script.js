/* Требования к работе:

1) В разметке должно быть не более 1 заголовка h1. У всех изображений должны быть заданы
   атрибуты width и height и alt. Стилизация страницы должна полностью соответствовать
   макету(Учитывайте разрешение страницы на макете и фактическое разрешение вашего монитора).
   При наведении на картку реализуйте псевдокласс, который окрасит цвет картинки в синий цвет согласно макету.
2) В работе упоминается слайдер.Используя JS, реализуйте анимированное переключение только
   текста и кнопка внутри фрейма, оставляя нетронутым задний фон. Чуть ниже упоминается еще
   один слайдер, который должен одновременно перемещать 4 картинки за раз(предусмотрите в
   работе 12 картинок). Третий слайдер переключает отзывы поштучно.
3) В работе необходимо учесть адаптив под мобильное разрешение.Второй слайдер в этом случае
   должен переключать по одной картинке, вместо 4 за раз.
4) В самом низу необходимо реализовать форму согласно макету.Используя JS соберите все 
   данные в объект и по нажатию “Отправить сообщение” выведите содержимое объекта в консоль. 
5) В мобильной версии необходимо реализовать бургер - меню, который по нажатию в виде выпадающего 
   списка будет под хедером формировать список элементов навигации
6) Работа должна быть опубликована на github. В качестве отчета необходимо отправить ссылку на 
   репозиторий со всеми файлами. */


   const slider = document.querySelector(".slider");
   const leftArrow = document.getElementById('left');
   const rightArrow = document.getElementById('right');
   const indicatorParents = document.querySelector(".controls ul");
   

   var sectionIndex = 0;
   function setIndex() {
     document.querySelector(".controls .selected").classList.remove("selected");
     slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
   }
   document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
     indicator.onclick = () => {
       sectionIndex = ind;
       setIndex();
       indicator.classList.add("selected");
     };
   });
   leftArrow.onclick = () => {
     sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 3;
     setIndex();
     indicatorParents.children[sectionIndex].classList.add("selected");
   };
   rightArrow.onclick = () => {
     sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 0;
     setIndex();
     indicatorParents.children[sectionIndex].classList.add("selected");
   };
   //-----------------------------------------------------------------------slider2
   const slider2 = document.querySelector(".slider2");
   const leftArrow2 = document.getElementById('left2');
   const rightArrow2 = document.getElementById('right2');
   const indicatorParents2 = document.querySelector(".controls2 ul");
   var sectionIndex2 = 0;
   function setIndex2() {
     document.querySelector(".controls2 .selected").classList.remove("selected");
     slider2.style.transform = "translate(" + sectionIndex2 * -102.88 + "%)";
   }
   document.querySelectorAll(".controls2 li").forEach(function (indicator2, ind2) {
     indicator2.onclick = () => {
       sectionIndex2 = ind2;
       setIndex2();
       indicator2.classList.add("selected");
     };
   });
   leftArrow2.onclick = () => {
     sectionIndex2 = sectionIndex2 > 0 ? sectionIndex2 - 1 : 3;
     setIndex2();
     indicatorParents2.children[sectionIndex2].classList.add("selected");
   };
   rightArrow2.onclick = () => {
     sectionIndex2 = sectionIndex2 < 3 ? sectionIndex2 + 1 : 0;
     setIndex2();
     indicatorParents2.children[sectionIndex2].classList.add("selected");
   };
   //-----------------------------------------------------------------------slider3
   const slider3 = document.querySelector(".slider3");
   const leftArrow3 = document.getElementById('left3');
   const rightArrow3 = document.getElementById('right3');
   const indicatorParents3 = document.querySelector(".controls3 ul");
   var sectionIndex3 = 0;
   function setIndex3() {
     document.querySelector(".controls3 .selected").classList.remove("selected");
     slider3.style.transform = "translate(" + sectionIndex3 * -25 + "%)";
   }
   document.querySelectorAll(".controls3 li").forEach(function (indicator3, ind3) {
     indicator3.onclick = () => {
       sectionIndex3 = ind3;
       setIndex3();
       indicator3.classList.add("selected");
     };
   });
   leftArrow3.onclick = () => {
     sectionIndex3 = sectionIndex3 > 0 ? sectionIndex3 - 1 : 3;
     setIndex3();
     indicatorParents3.children[sectionIndex3].classList.add("selected");
   };
   rightArrow3.onclick = () => {
     sectionIndex3 = sectionIndex3 < 3 ? sectionIndex3 + 1 : 0;
     setIndex3();
     indicatorParents3.children[sectionIndex3].classList.add("selected");
};
   //----------------------Burger menu

let burger_menu = document.querySelector('.burger_menu')
let navigation = document.querySelector('.navbar')

let setBurgerMenu = false

burger_menu.onclick = () => {
    burgerMenuHandler()
}

function burgerMenuHandler(){
    if(!setBurgerMenu){
        burger_menu.classList.add('active')
        navigation.classList.add('active')
    } else {
        burger_menu.classList.remove('active')
        navigation.classList.remove('active')
    }
    setBurgerMenu = !setBurgerMenu
}

window.onresize = (e) => {
    if(e.target.innerWidth > 754){
        navigation.classList.remove('active')
    } else {
        if (setBurgerMenu){
            navigation.classList.add('active')
        }
    }
}
/* Display user Data */
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.registration-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(form);

    // Convert FormData entries to array and then log to console
    const entriesArray = Array.from(formData.entries());
    const dataObject = Object.fromEntries(entriesArray);

    // Display the data in console
    console.log(dataObject);
  });
});






