import { eachItem } from "ajv/dist/compile/util"

export class InitialPageLoad{
  static #content = document.querySelector("#content")
  static initialPageLoad(){
    this.heading()
    this.openingHours()
    this.location()
  }
  static heading(){
    const div = document.createElement("div")
    div.classList.add('home-div')
    const headingPara = document.createElement("p")
    const heading = document.createElement("h1")
    heading.textContent = "Doodles"
    headingPara.textContent = "Welcome to our Doodles Noodles shop where we make the best noodles around, you can pick from all sorts of noodles here like  Fried Noodles, Dry Ramen, Classic Ramen, Instant Ramen and Pad Thai (Thai) so come and welcome us with your visit."
    this.appendChildren(div,heading,headingPara)
    this.#content.appendChild(div)
  }
  static openingHours(){
    const openingHoursList = document.createElement("ol")
    openingHoursList.classList.add('home-div')
    const openingHoursHeading = document.createElement("h2")
    const lowerHeading = document.createElement("h2")
    openingHoursHeading.textContent = "You can visit us at these hours"
    openingHoursList.appendChild(openingHoursHeading)
    lowerHeading.textContent = "Our Opening hours are"
    const weekDays = ["Monday","Tuesdy","Wednesday","Thursday","Friday","Saturday","Sunday"]
    for(let i = 0; i < 7; i++){
      if(i < 6){
      listItemText(weekDays[i],"8-17")
      }else{
      listItemText(weekDays[i],"10-18")
      }
    }
    this.#content.appendChild(openingHoursList)

    function listItemText(day,openTime){
    const listItem = document.createElement("li")
    listItem.textContent = `${day}: ${openTime}`
    openingHoursList.appendChild(listItem)
  }
  }
  static location(){
    const div = document.createElement("div")
    div.classList.add("home-div")
    const locationHeading = document.createElement("h2")
    const locationPara = document.createElement("p")
    locationHeading.textContent = "Location"
    locationPara.textContent = "723 Fernlight Way East Alderfield, Liora 82904 United Provinces of Velmara"
    this.appendChildren(div,locationHeading,locationPara)
    this.#content.appendChild(div)
  }
  static appendChildren(parent,...children){
    children.forEach(item => parent.appendChild(item))
  }
}