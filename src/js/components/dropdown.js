const drop = document.querySelector('.dropdown')
const btn = document.querySelector('.header-nav__btn');
btn.addEventListener('click',function(){
  drop.classList.toggle('dropdown--active');
  btn.classList.toggle('nav-btn--active');
})
const dropTel = document.querySelector('.dropdown-tel');
const btnTel = document.querySelector('#header__tel-btn');
btnTel.addEventListener('click', function () {
  dropTel.classList.toggle('dropdown-tel--active');;
})
