
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

const cardWrapper = document.querySelector('.card-content__list');
console.log(cardWrapper)
// отслеживаем клик на странице
window.addEventListener('click',function(event){
	// проверям клик по кнопке добавить в корзину
  if (event.target.hasAttribute('data-card')){

    // находим карточку с товаром
    const card = event.target.closest('.card-item')
    //собираем данные с этого товара и записываем их в обект productInfo
    const productInfo ={
      id: card.dataset.id,
      imgSrc: card.querySelector('.catalog-section__img-image').getAttribute('src'),
      title: card.querySelector('.catalog-section-content__title').innerText,
      price: card.querySelector('.catalog-section-purchase__new-price').innerText,
      counter: card.querySelector('[data-counter]').innerText,
    };
    // проверяем есть ли товар в корзине
    const itemInCart = cardWrapper.querySelector(`[data-id="${productInfo.id}"`);
    // если товар есть в корзине
    if (itemInCart){
      const counterElement = itemInCart.querySelector('[data-counter]');
      counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    }else{// если товара нет в корзине


    // собираем данные и подставляем их в шаблон
    const cartItemHTML = `<li class="card-content__item" data-id="${productInfo.id}">
              <article class="card-content__product cart-product">
                <img class="card-product__img" src="${productInfo.imgSrc}" alt="${productInfo.title}">
                <div class="card-product__text">
                  <h3 class="card-product__title">
                    ${productInfo.title}
                  </h3>
                  <div class="catalog-section-purchase">
                    <label class="catalog-section-purchase__label">
                      <input class="catalog-section-purchase__input" type="button">
                      <span class="catalog-section-purchase__counter" data-counter>${productInfo.counter}</span>
                      <button class="catalog-section-purchase__btn catalog-section-purchase__btn--more btn-reset"
                        data-action="plus"></button>
                      <button class="catalog-section-purchase__btn catalog-section-purchase__btn--less btn-reset"
                        data-action="minus"></button>
                    </label>
                    <span class="card-product__price">${productInfo.price}</span>
                  </div>
                </div>
                <button class="card-product__delete btn-reset"></button>
              </article>
            </li>`;
    cardWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
    }
    // сбрасываем счетчик добавленного товара на 1
    card.querySelector('[data-counter]').innerText = '1';
    function cartStatus() {
      cardEmpty = document.querySelector('.card-content__empty')
      const cardWrapper = document.querySelector('.card-content__list');
      if (cardWrapper.children.length > 1) {
        cardEmpty.classList.add('is-hidden')
      }else{
        cardEmpty.classList.remove('is-hidden')
      }


    }
    cartStatus()
    calcPrice()
  }

})






