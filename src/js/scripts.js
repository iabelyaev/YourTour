const navBar = document.querySelector('.header');


const scroll = () => {
  if (window.scrollY > 450) {
    navBar.classList.add('header--scroll')
  } else {
    navBar.classList.remove('header--scroll')
  }
}

window.addEventListener('scroll', scroll)
