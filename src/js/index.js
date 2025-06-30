import "../styles/style.css"
import { InitialPageLoad } from "./itinial-page-load"
import { Menu } from "./menu"
import {Contact} from "./contact.js"

document.addEventListener('click', event => {
  const content = document.querySelector('#content')
  const homeBtn = document.querySelector('#home-btn')
  const menuBtn = document.querySelector('#menu-btn')
  const contactBtn = document.querySelector('#contact-btn')
  function addHiddenClass(selectedBtn,...buttons){
    buttons.forEach(item => item.firstChild.classList.add("hidden-element"))
    selectedBtn.firstChild.classList.remove("hidden-element")
  }
  function removeContent(){
    while(content.firstChild){
        content.removeChild(content.firstChild)
    }
  }
  let target = event.target
  switch(target.id){
    case 'home-btn':
      removeContent()
      InitialPageLoad.initialPageLoad()
      addHiddenClass(homeBtn,homeBtn,menuBtn,contactBtn)
      break;
    case 'menu-btn':
      removeContent()
      addHiddenClass(menuBtn,homeBtn,menuBtn,contactBtn)
      Menu.init()
      break;
    case 'contact-btn':
      removeContent()
      addHiddenClass(contactBtn,homeBtn,menuBtn,contactBtn)
      Contact.init()
      break;
  }
})
InitialPageLoad.initialPageLoad()