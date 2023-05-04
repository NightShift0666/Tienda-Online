let user = document.querySelector('.login__input--email');

let password = document.querySelector('.login__input--password');
let button = document.querySelector('.login__submit');

button.addEventListener('click', (e)=>{

    e.preventDefault();

    if(user.value == '' || password.value == ''){

        user.classList.add('incorrect');
        password.classList.add('incorrect');
        alert('Debes llenar todos los campos');
    } else{

        user.classList.add('correct');
        password.classList.add('correct');
    }
    let data = {
        user : user.value,
        password: password.value,
    }

    console.log(data);
});