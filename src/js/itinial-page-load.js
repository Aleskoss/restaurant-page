export class InitialPageLoad{
  content = document.querySelector("#content")
  headingPara = document.createElement("p")
  openingHoursList = document.createElement("ol")
  openingHoursHeading = document.createElement("h2")
  heading = document.createElement("h1")
  lowerHeading = document.createElement("h2")
  static initialPageLoad(){
    this.heading.textContent = "Doodles"
    this.headingPara.textContent = "Welcome to our Doodles Noodles shop where we make the best noodles around, you can pick from all sorts of noodles here like  Fried Noodles, Dry Ramen, Classic Ramen, Instant Ramen and Pad Thai (Thai) so come and welcome us with your visit."
    this.content.appendChild(this.heading)
    this.content.appendChild(this.headingPara)
    this.openingHours()
  }
  static openingHours(){
    this.openingHoursHeading.textContent = "You can visit us at these hours:"
    this.openingHoursList.appendChild(this.openingHoursHeading)
    this.lowerHeading.textContent = "Our Opening hours are"
    const weekDays = ["Monday","Tuesdy","Wednesday","Thursday","Friday","Saturday","Sunday"]
    for(let i = 0; i < 7; i++){
      if(i < 6){
      this.listItemText(weekDays[i],"8-17")
      }else{
      this.listItemText(weekDays[i],"10-18")
      }
    }
    this.content.appendChild(this.openingHoursList)
  }
  static listItemText(day,openTime){
    const listItem = document.createElement("li")
    listItem.textContent = `${day}: ${openTime}`
    this.openingHoursList.appendChild(listItem)
  }
  static conacts(){
    contactHeading = document.createElement("h2")
    noodleChef = document.createElement("p")
    noodlManager = document.createElement("p")
    noodleReception = document.createElement("p")
    contactHeading = "Contact us:"
  }
}