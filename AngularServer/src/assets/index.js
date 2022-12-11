var ring = document.querySelector('.ring')
var mangaButton = document.querySelector('.btn-manga')

window.addEventListener('mousemove', (e) => {
  console.log(mangaButton.style.clipPath)

  var x = e.pageX;
  var y = e.pageY;

  ring.style.left = x - 50 + "px"
  ring.style.top = y - 50 + "px"
})