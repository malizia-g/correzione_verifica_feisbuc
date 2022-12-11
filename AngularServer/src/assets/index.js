var ring = document.querySelector('.ring')
var mangaButton = document.querySelector('.btn-manga')
var animeButton = document.querySelector('.btn-anime')

window.addEventListener('mousemove', (e) => {
  var x = e.pageX;
  var y = e.pageY;

  // Cerchio
  ring.style.left = x - 50 + "px"
  ring.style.top = y - 50 + "px"

  // Bottone manga
  const rectMangaX = e.pageX - mangaButton.getBoundingClientRect().left - window.scrollX;
  const rectMangaY = e.pageY - mangaButton.getBoundingClientRect().top - window.scrollY;
  mangaButton.style.clipPath = `circle(50px at ${parseInt(rectMangaX)}px ${parseInt(rectMangaY)}px)`;

  // Bottone anime
  const rectAnimeX = e.pageX - animeButton.getBoundingClientRect().left - window.scrollX;
  const rectAnimeY = e.pageY - animeButton.getBoundingClientRect().top - window.scrollY;
  animeButton.style.clipPath = `circle(50px at ${parseInt(rectAnimeX)}px ${parseInt(rectAnimeY)}px)`;

})