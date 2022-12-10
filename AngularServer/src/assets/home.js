var Hbtn = document.querySelector('.btn')
var ring = document.querySelector('.ring')

document.querySelector('.row').addEventListener('mousemove',(e)=>{
  var x=e.offsetX;
  var y=e.offsetY;
  Hbtn.style.clipPath = `circle(50px at ${x}px ${y}px)`;
})