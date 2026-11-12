const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

function setLanguage(lang) {
  const chosen = lang === "en" ? "en" : "de";
  document.documentElement.lang = chosen;
  document.querySelectorAll("[data-de][data-en]").forEach((el) => {
    const value = el.dataset[chosen];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    const active = button.dataset.lang === chosen;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const title = chosen === "de" ? "Kissmet – Raum für echte Verbindungen" : "Kissmet – Make room for connection";
  document.title = title;
}
document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
setLanguage("de");
