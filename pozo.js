var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
var content3 = document.getElementById('contenido3');
var content4 = document.getElementById('contenido4');
var video = document.getElementById('reproductor');
async function init() {
  content.style.display = "block";
  setTimeout(() => {
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
  }, 0);
  setTimeout(() => {
    content.style.display = "none";
    content2.style.display = "block";
    content3.style.display = "none";
    content4.style.display = "none";
  }, 2000);
  setTimeout(() => {
    content.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "block";
    content4.style.display = "none";
  }, 217000);
  setTimeout(() => {
    content.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "block";
  }, 218500);
}

// Configurar HLS.js para reproducir el stream
if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource('https://5eceaba21b91f.streamlock.net:443/live/d0107.stream/playlist.m3u8');
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function() {
    video.play();
  });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  // Para Safari que soporta HLS nativamente
  video.src = 'https://5eceaba21b91f.streamlock.net:443/live/d0107.stream/playlist.m3u8';
  video.addEventListener('loadedmetadata', function() {
    video.play();
  });
}

init();


// async function getUser() {
//   try {
//     const response = await axios.get('http://apitinka.alacoohperu.pe/api/tinka');
//     const text_monto = response.data.data.premios.text;
//     console.log(text_monto)
//     localStorage.setItem('montoFinal', JSON.stringify(text_monto));
//     const montoFinal = JSON.parse(localStorage.getItem('montoFinal'));
//     innerHTML(montoFinal);
//   } catch (error) {
//     const montoFinal = JSON.parse(localStorage.getItem('montoFinal'));
//     innerHTML(montoFinal);
//   }
// }

// function innerHTML(text_monto){
//   const pozoMid = document.getElementById('monto');
//   const millonesId = document.getElementById('millones');
//   const millones = "";
//   const mm = text_monto.split("'");
//   const monto = (mm[1].charAt(0) === '0') ? `${mm[0]}` : `${mm[0]}.${mm[1].charAt(0)}`;
//   console.log(monto)
//   pozoMid.innerHTML = monto;
//   millonesId.innerHTML = millones + " MILLONES";
//   pozoMid.className = (mm[1].charAt(0) === '0') ? 'pozoUnidad' : 'pozo2digitos';
  
// }

