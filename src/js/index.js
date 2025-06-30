import "../styles/style.css"
import { InitialPageLoad } from "./itinial-page-load"
import { Menu } from "./menu"
import tonkotsu from "../images/tonkotsu.png"

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
  switch(target.id){
    case 'home-btn':
      removeContent()
      InitialPageLoad.initialPageLoad()
      addHiddenClass(homeBtn,homeBtn,menuBtn,aboutBtn)
      break;
    case 'menu-btn':
      removeContent()
      addHiddenClass(menuBtn,homeBtn,menuBtn,aboutBtn)
      Menu.init()
      break;
  }
})
InitialPageLoad.initialPageLoad()