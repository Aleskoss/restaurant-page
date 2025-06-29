import "../styles/style.css"
import { InitialPageLoad } from "./itinial-page-load"
import { Menu } from "./menu"

document.addEventListener('click', event => {
  const content = document.querySelector('#content')
  const homeBtn = document.querySelector('#home-btn')
  const menuBtn = document.querySelector('#menu-btn')
  const aboutBtn = document.querySelector('#about-btn')
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
  removeContent()
  switch(target.id){
    case 'home-btn':
      InitialPageLoad.initialPageLoad()
      addHiddenClass(homeBtn,homeBtn,menuBtn,aboutBtn)
      break;
    case 'menu-btn':
      addHiddenClass(menuBtn,homeBtn,menuBtn,aboutBtn)
      Menu.init()
      break;
  }
})