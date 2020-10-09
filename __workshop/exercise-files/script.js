// add js here
let form=document.getElementById('form');

let password=document.getElementById('password');
let password2=document.getElementById('password2');
let clear=document.getElementById('clear');
let checkbox=document.getElementById('checkbox');
let suggestion=document.getElementById('suggestion');
let errorbox=document.getElementById('errorbox');
let errortext=document.getElementById('errortext');


form.addEventListener('submit', submitForm);
clear.addEventListener('click', resetForm);


function submitForm(event){
    event.preventDefault();
    checkInputs();
}

function checkInputs(){
    let passwordValue=password.value;
    let password2Value=password2.value;  
    let checkboxValue=checkbox.checked;

    if(checkboxValue==false){
        window.alert("Terms and conditions must be agreed in order to submit.");
        return false;
    } else if(passwordValue.length<10){
        passwordError("The password length must be at least 10 characters.");
        password.classList.add('errorNotification');
        suggestion.style.display="block";
        suggestion.innerHTML=`<strong>Use suggested password:</strong> ${passwordGenerator()}`;
        return false;
    } else if(passwordValue!==password2Value){
        passwordError("The passwords do not match.");
        password.classList.add('errorNotification');
        password2.classList.add('errorNotification');
        suggestion.style.display="block";
        suggestion.innerHTML=`<strong>Use suggested password:</strong> ${passwordGenerator()}`;
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
    suggestion.style.display="none";
    window.alert("Success!");
}

function resetForm(){
    form.reset();
}

function passwordGenerator(){
    let nameList=["crustaceous","moves","advantages","has","over","mississippi","fast","former","faceswap","mixing","liquids","running","downhill","arranging","clown-makeup","popping","buttons","echoing","glass","playing","with","wool"];
    let pword="";
    for(let i=1;i<=4;i++){
        if(i<4){
            pword+=nameList[Math.floor(Math.random() * nameList.length)]+"-";
        }
        else{
            pword+=nameList[Math.floor(Math.random() * nameList.length)];
        }
    }
    return pword;
}
