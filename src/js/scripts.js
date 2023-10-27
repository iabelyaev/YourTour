const navBar = document.querySelector('.header');
const element = document.querySelector('input[type="tel"]');

const maskOptions = {
  mask: '+{7}(000) 000 - 00 - 00'
};

const mask = IMask(element, maskOptions);

const scroll = () => {
  if (window.scrollY > 450) {
    navBar.classList.add('header--scroll')
  } else {
    navBar.classList.remove('header--scroll')
  }
}

window.addEventListener('scroll', scroll)
