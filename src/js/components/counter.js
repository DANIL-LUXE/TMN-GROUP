
// import calcPrice from './calcPrice'
// послушка на всё оконо



window.addEventListener('click',function(event){
  // const catalogSection = document.querySelector('.catalog-section');

  // if (catalogSection) {


  // Обявляем переменную для счетчика
  let counter;
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
  // находим обёрку счётчика
  const counterWrapper = event.target.closest('.catalog-section-purchase__label');
  // находим число счетчика
    counter = counterWrapper.querySelector('[data-counter]');
    console.log(counter)
  }

  function calcPrice() {
    // const cardWrapper = document.querySelector('.card-content__list');
    const cardItems = document.querySelectorAll('.cart-product')
    const totalPriceEl = document.querySelector('.card-content__totalprice');
    let totalPrice = 0;
    cardItems.forEach(function (i) {
      const amountEl = i.querySelector('[data-counter]');
      const priceEl = i.querySelector('.card-product__price');
      const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
      totalPrice += currentPrice;

    })
    totalPriceEl.innerText = totalPrice;
  }


  // Проверяем является ли элемент кнопкой плюс
  if (event.target.dataset.action ==='plus'){
    counter.innerText = ++counter.innerText;
  }
  // Проверяем является ли элемент кнопкой минус
  if (event.target.dataset.action === 'minus') {
    // проверка на товар находяшийся в корзине

    if (parseInt(counter.innerText) > 1) {
     // изменяем текст в счетчичек уменьшая его на 1
    counter.innerText = --counter.innerText;
    } else if (event.target.closest('.card-content__wrapper') && parseInt(counter.innerText) === 1) {
      event.target.closest('.card-content__item').remove();
      function cartStatus() {
        cardEmpty = document.querySelector('.card-content__empty')
        const cardWrapper = document.querySelector('.card-content__list');
        console.log(cardWrapper.children.length)
        if (cardWrapper.children.length > 1) {
          cardEmpty.classList.add('is-hidden')
        } else {
          cardEmpty.classList.remove('is-hidden')
        }
      }
      cartStatus()
      calcPrice()
  }
    if (event.target.hasAttribute('data-action') && event.target.closest('.card-content__wrapper')) {
      console.log(event.target.closest('.card-content__wrapper'))
      calcPrice()
    }
}

})
















