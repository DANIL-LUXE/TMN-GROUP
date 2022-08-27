  const search = document.querySelectorAll('.header__social-label');
  const searchBtn = document.querySelectorAll('.header__btn-searth');
search.forEach(function(e){
  searchBtn.forEach(function (i) {
    i.addEventListener('click', function () {
      e.classList.toggle('header__social-label--active');
    })
  })
})








