// Smooth scroll
const links=document.querySelectorAll('.nav-links li a');links.forEach(l=>{l.addEventListener('click',function(e){if(this.hash){e.preventDefault();document.querySelector(this.hash).scrollIntoView({behavior:'smooth'});}})});
// Animate cards
document.querySelectorAll('.animated-card').forEach((c,i)=>{c.style.left=`${50+i*120}px`;});