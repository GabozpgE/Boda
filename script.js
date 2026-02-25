/* =========================
   Invitación Boda – JS
   Funciones:
   - Contador en tiempo real
   - Botones de mapas (ceremonia / recepción)
   - Botón RSVP (Forms)
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     CONFIGURACIÓN GENERAL
     ========================= */

  // Fecha del evento (ajusta hora/zona si es necesario)
  const EVENT_DATE = new Date("2026-04-25T17:00:00-06:00");

  // URLs (rellena cuando tengas los links finales)
  const MAPS = {
    ceremonia: "https://share.google/uzar6iDjuK3icYrjU",
    recepcion: "https://share.google/5VhpmbT593AffXG3m"
  };

  const RSVP_FORM_URL = "https://forms.gle/TU_FORM_AQUI";

  /* =========================
     CONTADOR EN TIEMPO REAL
     ========================= */

  const daysEl = document.getElementById("cdDays");
  const hoursEl = document.getElementById("cdHours");
  const minutesEl = document.getElementById("cdMinutes");
  const secondsEl = document.getElementById("cdSeconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = EVENT_DATE.getTime() - now;

    if (distance <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* =========================
     BOTONES DE UBICACIÓN
     ========================= */

  document.querySelectorAll("[data-maps]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const type = btn.dataset.maps;
      const url = MAPS[type];

      if (!url) {
        console.warn("Mapa no configurado:", type);
        return;
      }

      window.open(url, "_blank", "noopener,noreferrer");
    });
  });

  /* =========================
   BOTÓN RSVP -> WHATSAPP
   ========================= */

const rsvpBtn = document.getElementById("btnRsvp");

const WHATSAPP_NUMBER = "5214524802424"; // MX: 521 + número (sin +, sin espacios)

const WHATSAPP_MESSAGE =
  "Hola Mara, quiero confirmar asistencia a la boda de Natalia & Jorge.\n\n" +
  "Nombre:\n";

if (rsvpBtn) {
  rsvpBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(WHATSAPP_MESSAGE);

    window.open(url, "_blank", "noopener,noreferrer");
  });
}

  /* =========================
     CÓDIGO DE VESTIMENTA (opcional)
     ========================= */

  const dressBtn = document.getElementById("btnDresscodeInfo");

  if (dressBtn) {
    dressBtn.addEventListener("click", () => {
      alert(
        "Código de vestimenta:\n\nFormal elegante.\n\nEvitar colores blancos o marfil."
      );
    });
  }
});
