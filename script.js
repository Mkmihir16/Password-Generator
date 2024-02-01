let pass=document.querySelector(".inputs input");
let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYS";
let lowercase="abcdefghijklmnopqrstuvwxyz";
let number="1234567890";
let length=12;
let specialchar="!@#$%^&*()_+-={}";
function passsword(){
    let password="";
password+=uppercase[Math.floor(Math.random()*uppercase.length)];
password+=lowercase[Math.floor(Math.random()*lowercase.length)];
password+=number[Math.floor(Math.random()*number.length)];
password+=specialchar[Math.floor(Math.random()*specialchar.length)];
while(password.length<length){
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
password+=lowercase[Math.floor(Math.random()*lowercase.length)];
password+=number[Math.floor(Math.random()*number.length)];
password+=specialchar[Math.floor(Math.random()*specialchar.length)];
}
pass.value=password;
console.log(pass.value)
}
function fun(){
    document.querySelector("p").classList.add("add");
    // window.clipboard.writeText(pass.value);
    navigator.clipboard.writeText(pass.value);
    console.log(navigator.clipboard.writeText(pass.value));
    setTimeout(()=>{
        document.querySelector("p").classList.remove("add");
    },3000)
    // alert("Password Copied");
}