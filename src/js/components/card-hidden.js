const card = document.querySelector('.card');
const btns = document.querySelectorAll('#btn-cart');
const btnClose = document.querySelector('.card-content__btnclose');
btns.forEach(btn => {
  btn.addEventListener('click', function () {
    card.classList.remove('hidden')
  })
  btnClose.addEventListener('click', function () {
    card.classList.add('hidden')
  })
})
