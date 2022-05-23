function documento(){
  let doc = document.getElementById("userInput").value;

    if (doc == 52368795){
        Swal.fire({
          title: 'Esquema de vacunación',
              icon: 'info',
              iconColor: "white", 
              html:
              '<b>Nombre:</b> Jota Mario <br> ' +
              '<b>Primera Dosis:</b> Registra <br>' +
              '<b>Fecha de aplicación:</b> 12/05/2020<br> ' +
              '<b>Tipo:</b> Pfizer<br>' +
              '<b>Segunda dosis:</b> No<br> ' +
              `<h3>El usuario sólo cuenta con una primera dosis ¿Desea agendar la siguiente dosis?</h3> `,
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Editar',
            confirmButtonColor: '#EB984E',
            cancelButtonText: 'Aceptar',
          }).then((value) => {
            window.location. href='newdosis.html'
            });
    }else if (doc==1001235478){
        Swal.fire({
            title: 'Esquema de vacunación',
            icon: 'info',
              iconColor: "white", 
              html:
              '<b>Nombre:</b> Luz Maria<br> ' +
              '<b>Primera Dosis:</b> Registra<br>' +
              '<b>Fecha de aplicación:</b> 23/01/2022<br> ' +
              '<b>Tipo:</b> Pfizer<br>' +
              '<b>Segunda dosis:</b> Sí<br> ' +
              '<b>Fecha de aplicación:</b> 03/27/2022<br> ' +
              `<h3>El usuario sólo cuenta con dos dosis ¿Desea agendar la siguiente dosis?</h3> `,
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Revisar',
            confirmButtonColor: '#EB984E',
            cancelButtonText: 'Cancelar',
          }).then((value) => {
            window.location. href = 'newdosis.html'
          });
    }else if (doc == 25413574){
        Swal.fire({
          title: 'Esquema de vacunación',
            icon: 'info',
              iconColor: "white", 
              html:
              '<b>Nombre:</b> Juan Chayanne<br> ' +
              '<b>Primera Dosis:</b> Registra<br>' +
              '<b>Fecha de aplicación:</b> 07/07/2021<br> ' +
              '<b>Tipo:</b> Pfizer<br>' +
              '<b>Segunda dosis:</b> Registra<br> ' +
              '<b>Fecha de aplicación:</b> 02/02/2022<br> ' +
              '<b>Tercera dosis:</b> Registra<br> ' +
              '<b>Fecha de aplicación:</b> 11/07/2022<br> ' +
              `<h3>El usuario cuenta con todas las dosis</h3> `,
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Revisar',
            confirmButtonColor: '#EB984E',
            cancelButtonText: 'Cancelar',
          }).then((value) => {
            window.location. href = 'newdosis.html'
          });
    }else if (doc == 1007203506){
        Swal.fire({
            title: 'Sin esquema de vacunación',
            icon: 'info',
            iconColor: "white", 
            text: `El usuario no cuenta con registro de vacunación ¿Desea hacer el registro?`,
            confirmButtonText:
            'Registrar',
            confirmButtonColor: '#EB984E',
          }).then((value) => {
            window.location. href = 'agregar.html'
          });
    }
  }