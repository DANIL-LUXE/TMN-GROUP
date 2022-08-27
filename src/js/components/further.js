const text = document.querySelector('.text-hidden')
if (text){
  const textBtn = document.getElementById('text-btn')
  textBtn.addEventListener('click', function(){
  text.classList.remove('text-hidden')
  textBtn.classList.add('hidden')
  })
}
