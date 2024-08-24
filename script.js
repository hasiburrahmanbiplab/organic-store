let navEl = document.querySelector(".nav");
let hamburgerEl = document.querySelector(".hamburger");
hamburgerEl.addEventListener("click" , () =>{
    navEl.classList.toggle('active');
});