const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email= document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");


form.addEventListener("submit",(e)=>{
e.preventDefault();
CheckInput();
});






const CheckInput =()=>{
const usernameValue =username.value.trim();
const emailValue =email.value.trim();
const passwordValue =password.value.trim();
const password2Value =password2.value.trim();

if(usernameValue===""){
    setError(username,"لطفا نام کاربری خود را واردکنید");
}else{
    setSucces(username);
}



if(emailValue===""){
    setError(email,"لطفا ایمیل خودرا وارد کنید");
}else{
    setSucces(email);
    
}


if(passwordValue===""){
    setError(password,"لطفا پسوورد خودرا وارد کنید");
}else{
    setSucces(password);
}

if(password2Value===""){
    setError(password2,"تکرار پسوورد را وارد کنید");
}else{
    setSucces(password2);
   
}if(password2===password){
    setSucces(password2);
}else{
    setError(password2,"پسوورد صحیح را وارد کنید")
}






}

const setError=(input,message)=>{
const formControl =input.parentElement;
const small =formControl.querySelector("small");

formControl.className= "form-control error"
small.innerText=message;
}

const setSucces=(input)=>{
    const formControl =input.parentElement; 
    formControl.className="form-control succes";
    
}