let navigator=document.getElementById('back-to-top');
window.onscroll=()=>{
    if(document.body.scrollTop>200||document.documentElement.scrollTop>300) {
        navigator.style.display="block";
    }
    else{
        navigator.style.display="none";
    }
}
function gototop(){
    document.documentElement.scrollTop=0;
}

let navbar=document.querySelector('.navbar');
let menu=document.getElementById('menu-btn');
menu.onclick=()=>{
    navbar.classList.toggle('open-menu');
}
