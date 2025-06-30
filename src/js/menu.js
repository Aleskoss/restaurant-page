import { InitialPageLoad } from "./itinial-page-load"
import tonkotsu from "../images/tonkotsu.png"
import spicyNoodles from "../images/spicy-thai-noodles.jpg"
export class Menu{
  static #content = document.querySelector('#content')
  static menuItemText = ["Classic Tonkotsu Ramen – $13.95","Spicy Thai Drunken Noodles – $12.95","Dan Dan Noodles (Sichuan Style) – $11.95","Vietnamese Pho (Beef or Chicken) – $13.50"]
  static menuItemIntro = ["Rich pork bone broth, chashu pork belly, soft-boiled egg, bamboo shoots, scallions, black garlic oil.",
    "Wide rice noodles, chili basil sauce, bell peppers, onions, Thai basil, choice of chicken, beef, or tofu.",
    "Wheat noodles, spicy sesame sauce, ground pork, pickled mustard greens, peanuts, scallions.",
    "Fragrant beef broth, rice noodles, herbs, bean sprouts, jalapeños, lime."
  ]
  static init(){
    for(let i = 0; i < this.menuItemText.length; i++){
      this.listMenuItem(this.menuItemText[i],this.menuItemIntro[i])
    }
  }
  static listMenuItem(headingText,paraText){
    const div = document.createElement('div')
    div.classList.add('menu-div')
    const heading = document.createElement('h1')
    const para = document.createElement('para')
    const divRight = document.createElement('div')
    const imgDiv = document.createElement('div')
    heading.textContent = headingText
    para.textContent = paraText
    InitialPageLoad.appendChildren(divRight,heading,para)
    InitialPageLoad.appendChildren(div,imgDiv,divRight)
    this.#content.appendChild(div)
  }
}