function load(){

    if (document.form.password.value=='Kuepa2022' && document.form.login.value=='Admin'){ 
            document.form.submit(); 
        } 
        else{ 
            Swal.fire({
                icon: 'error',
                title: 'Tus datos estan erroneos :(',
                text: 'Intenta de nuevo',
            })
        } 
    }