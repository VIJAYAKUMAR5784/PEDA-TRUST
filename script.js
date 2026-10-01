const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle?.setAttribute("aria-expanded","false");}));
document.querySelector("#year").textContent=new Date().getFullYear();
document.querySelector("#contactForm")?.addEventListener("submit",e=>{e.preventDefault();document.querySelector("#formMessage").textContent="Thank you. Please connect this form to the Trust's email service before publishing.";e.target.reset();});
