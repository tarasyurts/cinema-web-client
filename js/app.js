document.querySelector('#m-menu-btn').addEventListener('click', (e)=>{
  document.querySelector('.m-menu').classList.add('_is-shown');

  let body = document.querySelector('body');
  body.insertAdjacentHTML("beforeend", '<div class="m-menu-backdrop"></div>');
  body.classList.add('no-scroll');
});

document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('m-menu-backdrop')){
    document.querySelector('.m-menu').classList.remove('_is-shown');
    e.target.parentNode.removeChild(e.target);
    document.querySelector('body').classList.remove('no-scroll');
  }
})
