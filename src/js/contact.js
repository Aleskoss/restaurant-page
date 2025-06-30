import { InitialPageLoad } from "./itinial-page-load"

export class Contact{
  static #content = document.querySelector('#content')
  static init(){
    this.contactInfo()
  }
  static contactInfo(){
    const div = document.createElement('div')
    div.classList.add('contacts-div')
    const header = document.createElement('h1')
    const deliveryPara = document.createElement('p')
    header.textContent = 'Contacts'
    deliveryPara.textContent = 'Get your noodles here (555) 013-4432'
    const receptionPara = document.createElement('p')
    receptionPara.textContent = 'You can book a table here (555) 019-4832'
    InitialPageLoad.appendChildren(div,header,deliveryPara,receptionPara)
    this.#content.appendChild(div)
  }
}