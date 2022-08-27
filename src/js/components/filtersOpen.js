const filters = document.querySelector('.catalog-section-filters');
if (filters){
const filtersBurger = document.querySelector('[data-catalog-burger]');
filtersBurger.addEventListener('click',function(){
  filters.classList.toggle('is-hidden')
})

}
