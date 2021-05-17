import {page} from '../components/page.js'

function setupMainPage(){
  const paragraph = document.createElement('p')
  paragraph.insertAdjacentText('afterbegin', 'Hello world')
  return page({content: { el: paragraph }})
}

document.querySelector('.page').replaceChildren(...setupMainPage().elArray);

