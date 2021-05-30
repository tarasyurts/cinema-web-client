export const STORAGE_KEY = 'TARAS_YURTS_CINEMA_APP_ORDERS_KEY'


document.querySelector('#m-menu-btn').addEventListener('click', (e)=>{
  document.querySelector('.m-menu').classList.add('_is-shown');

  let body = document.querySelector('body');
  body.insertAdjacentHTML("beforeend", '<div class="m-menu-backdrop"></div>');
  body.classList.add('no-scroll');
});

document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('m-menu-backdrop')){
    removeMobileMenu()
    e.target.remove();
  }
  if(e.target.classList.contains('m-menu__cross-button')){
    removeMobileMenu();
    document.querySelector('.m-menu-backdrop').remove();
  }
})

const removeMobileMenu = () => {
  document.querySelector('.m-menu').classList.remove('_is-shown');
  document.querySelector('body').classList.remove('no-scroll');
}
