import { InitialPageLoad } from "./itinial-page-load"
export class Menu{
  static #content = document.querySelector('#content')
  firstMenuItemText = "Classic Tonkotsu Ramen – $13.95"
  firstMenuItemIntro = "Rich pork bone broth, chashu pork belly, soft-boiled egg, bamboo shoots, scallions, black garlic oil."
  static init(){
    this.listMenuItem("Classic Tonkotsu Ramen – $13.95","Rich pork bone broth, chashu pork belly, soft-boiled egg, bamboo shoots, scallions, black garlic oil.")
  }
  static listMenuItem(headingText,paraText,imgSrc){
    const div = document.createElement('div')
    div.classList.add('menu-div')
    const heading = document.createElement('h1')
    const para = document.createElement('para')
    const img = document.createElement('img')
    heading.textContent = headingText
    para.textContent = paraText
    img.src = imgSrc
    InitialPageLoad.appendChildren(div,img,heading,para)
    this.#content.appendChild(div)
  }
}