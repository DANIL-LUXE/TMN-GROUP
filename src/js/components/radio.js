
const radio = document.getElementsByClassName('radio-style');
for (let i = 0; i < radio.length; i++) {
  radio[i].addEventListener('click', function () {
    for (let i = 0; i < radio.length; i++) {
      radio[i].classList.remove('radio-style--active');
    }
    this.classList.add('radio-style--active');
  });
}
