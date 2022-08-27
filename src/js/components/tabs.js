// Нашли все заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
// Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
  item.addEventListener('click', function () {
    let curentBtn = item;
    tabHeaders.forEach(function(item){
      item.classList.remove('tabs-btn--active')
    })
    curentBtn.classList.add('tabs-btn--active')
    // 1. Скрыть все content box
    contentBoxes.forEach(function (item) {
      item.classList.add('is-hidden');
      // item.classList.remove('tabs-btn--active')
    });

    // 2. Выбрать нужный content box и показать его
    const contentBox = document.querySelector('#' + this.dataset.tab);
    contentBox.classList.remove('is-hidden');

  })
})
