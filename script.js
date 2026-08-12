function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('show');
}
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('show'));
});
document.getElementById('year').textContent = new Date().getFullYear();
