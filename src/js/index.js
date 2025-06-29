import "../styles/style.css"
import { InitialPageLoad } from "./itinial-page-load"

document.addEventListener('click', event => {
  const content = document.querySelector('#content')
  const homeBtn = document.querySelector('#home-btn')
  function removeContent(){
    while(content.firstChild){
        content.removeChild(content.firstChild)
    }
  }
  console.log(homeBtn.firstChild)
  let target = event.target.id
  removeContent()
  switch(target){
    case 'home-btn':
      InitialPageLoad.initialPageLoad()
      homeBtn.firstChild.classList.toggle("hidden-element")
      break;
  }
})