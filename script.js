let header=document.querySelector('header');
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick= () =>{
    navbar.classList.toggle('active');

}




//darkmode-------//
let darkmode=document.querySelector('#darkmode');
darkmode.onclick=()=>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }
    else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');

    }
}
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
let openBtn=document.querySelector("#open-btn");
openBtn.addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
//console.log(openBtn);
let closeBtn=document.querySelector(".popup .close-btn");
closeBtn.addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
console.log(closeBtn);