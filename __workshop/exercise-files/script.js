// add js here
let form=document.getElementById('form');
let name=document.getElementById('name');
let address=document.getElementById('address');
let email=document.getElementById('email');
let password=document.getElementById('password');
let password2=document.getElementById('password2');
let clear=document.getElementById('clear');
let checkbox=document.getElementById('checkbox');

let errorbox=document.getElementById('errorbox');
let errortext=document.getElementById('errortext');


form.addEventListener('submit', submitForm);
clear.addEventListener('click', resetForm);


function submitForm(event){
    event.preventDefault();
    checkInputs();
}

function checkInputs(){
    // let nameValue=name.value;
    // let addressValue=address.value;
    // let emailValue=email.value;
    let passwordValue=password.value;
    let password2Value=password2.value;  
    let checkboxValue=checkbox.checked;

    if(checkboxValue==false){
        window.alert("Terms and conditions must be agreed in order to submit.");
        return false;
    } else if(passwordValue.length<10){
        passwordError("The password length must be at least 10 characters.");
        password.classList.add('errorNotification');
        return false;
    } else if(passwordValue!==password2Value){
        passwordError("The passwords do not match.");
        password.classList.add('errorNotification');
        password2.classList.add('errorNotification');
        return false;
    } else{
        clearErrors();
    }

}

function passwordError(msg){
    errortext.innerText=msg;
    errorbox.style.display="block";
    return false;
}

function clearErrors () { 
    errorbox.style.display = "none"; 
    console.log(password,password2);
    password.classList.remove('errorNotification');
    password2.classList.remove('errorNotification');
    window.alert("Success!");
    form.reset();
}

function resetForm(){
    form.reset();
}