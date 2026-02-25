// Opcional: precarga de assets para que la 2da ventana no “parpadee”
const preload = (srcs=[]) => srcs.forEach(s => { const i=new Image(); i.src=s; });


document.getElementById("openBtn").addEventListener("click", () => {
  // Cambia el nombre por tu segunda ventana
  window.location.href = "Index.html";
});