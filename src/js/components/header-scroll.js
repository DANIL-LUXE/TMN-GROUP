window.addEventListener('scroll', e =>{
  let header = document.querySelector('header').classList
  let activeClass = 'header--scrolled'
  if (scrollY > 350) header.add(activeClass)
  else header.remove(activeClass)


})
