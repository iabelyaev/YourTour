const navBar = document.querySelector('.navigation');


const scroll = () => {
  if (window.scrollY > 450) {
    navBar.classList.add('navigation--scroll')
  } else {
    navBar.classList.remove('navigation--scroll')
  }
}

window.addEventListener('scroll', scroll)
