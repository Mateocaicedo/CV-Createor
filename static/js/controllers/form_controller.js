import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
  static targets = [ "firstname" ]

  connect() {
      
  }

  print() {
      console.log(this.firstnameTarget.value)
  }
}