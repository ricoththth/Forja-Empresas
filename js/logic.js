function documento(){
  let doc = document.getElementById("userInput").value;

    if (doc == 52368795){
        Swal.fire({
            icon: 'warning',
            title: 'El documento ' + doc + ' registra la primera dosis',
            text: 'Jota Mario recibio AstraZeneca el 12/05/2022 en Bosa',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Editar',
            confirmButtonColor: '#EB984E',
            cancelButtonText: 'Aceptar',
          }).then((value) => {
            window.location. href='agregar.html'
            });
    }else if (doc==1001235478){
        Swal.fire({
            icon: 'warning',
            title: 'El documento ' + doc + ' registra dos dosis dosis',
            text: 'Luz Maria recibio la segunda dosis en el extranjero el dia 23/01/2021',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Revisar',
            confirmButtonColor: '#EB984E',
            cancelButtonText: 'Cancelar',
          }).then((value) => {
            window.location. href = 'agregar.html'
          });
    }else if (doc == 25413574){
        Swal.fire({
            icon: 'warning',
            title: 'El documento ' + doc + ' registra el esquema completo',
            text: 'Chayanne se vacuno en el olimpo de dia 07/07/7777',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Revisar',
            confirmButtonColor: '#EB984E',
            cancelButtonText: 'Cancelar',
          }).then((value) => {
            window.location. href = 'agregar.html'
          });
    }else if (doc == 1007203506){
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'El documento ' + doc + ' NO registra datos',
            text: 'No presenta ningun dato en la base',
            confirmButtonText:
            'Registrar',
            confirmButtonColor: '#EB984E',
          }).then((value) => {
            window.location. href = 'agregar.html'
          });
    }
  }
