console.log("Hello from form_controller.js");
export default class extends Controller {
    static targets = ["firstname", "lastname", "email", "ocupation", "photo", "photolabel"]
  
    print() {
      console.log(this.firstnameTarget.value);
    }
  }