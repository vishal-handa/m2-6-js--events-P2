// add js here
let form=document.getElementById('form');
let name=document.getElementById('name');
let address=document.getElementById('address');
let email=document.getElementById('email');
let password=document.getElementById('password');
let password2=document.getElementById('password2');
let submit=document.getElementById('submitForm');
let checkbox=document.getElementById('checkbox');

let errorbox=document.getElementById('errorbox');
let errortext=document.getElementById('errortext');


form.addEventListener('click', submitForm);


function submitForm(event){
    if(event.target.id==="submitForm"){
        if(checkInputs()===false){
            console.log(checkInputs());
            event.preventDefault();
        }
        else{
            console.log(event.target.id);
            checkInputs();
        }
    }
}

function checkInputs(){
    // let nameValue=name.value.trim();
    // let addressValue=address.value.trim();
    // let emailValue=email.value.trim();
    let passwordValue=password.value.trim();
    let password2Value=password2.value.trim();  
    let checkboxValue=checkbox.checked;

    if(checkboxValue==false){
        window.alert("Terms and conditions must be agreed in order to submit.");
        return false;
    }

    if(passwordValue.length<10){
        passwordError("The password length must be at least 10 characters.");
        password.classList.add('errorNotification');
        return false;
    }
    if(passwordValue!==password2Value)
    {
        passwordError("The passwords do not match.");
        password.classList.add('errorNotification');
        password2.classList.add('errorNotification');
        return false;
    }

}

function passwordError(msg){
    errortext.innerText=msg;
    errorbox.style.display="block";
    return false;
}


