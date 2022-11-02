import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
window.Stimulus = Application.start()

import form_controller from "./controllers/form_controller.js";

Stimulus.register("form-cv", form_controller)