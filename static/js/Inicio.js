// const actualBtn = document.getElementById('foto');
// const fileChosen = document.getElementById('fotoNombre');

// actualBtn.addEventListener('change', function(){
//   fileChosen.textContent = this.files[0].name
// })

// function Imprimir() {
//     var doc = new jsPDF()


//     var fname = document.getElementById('Nombres').value;
//     var lname = document.getElementById('Apellidos').value;

//     doc.text(`nombre: ${fname + lname}`, 10, 10)
//     doc.save('a4.pdf')

//     console.log(fname + " " + lname);
// }

function Rellenar() {
     document.getElementById('firstname').value = "Juan Carlos";
     document.getElementById('lastname').value = "Perez Perez";
     document.getElementById('email').value = "xxxx@hotmail.com";
     //La ocupacion trata sobre el estado actual de la persona y de lo que puede hacer, esta no puede ser un estudiante
     document.getElementById('ocupacion').value = "Estudiante";
}
