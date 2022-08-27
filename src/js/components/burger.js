const con = document.querySelector('.header__container');
const btnBurger = document.querySelector('.burger');
btnBurger.addEventListener('click', function () {
  con.classList.toggle('container--active');;
})
