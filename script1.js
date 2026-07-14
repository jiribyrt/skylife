// Načteme tlačítka
const btnLegal = document.getElementById('btn-legal');
const btnNeutral = document.getElementById('btn-neutral');
const btnIllegal = document.getElementById('btn-illegal');

// Načteme kontejnery
const legalContainer = document.getElementById('legal-cards-container');
const neutralContainer = document.getElementById('neutral-cards-container');
const illegalContainer = document.getElementById('illegal-cards-container');

// Pomocná funkce pro skrytí všech kontejnerů a odstranění aktivních tříd
function resetView() {
  legalContainer.style.display = 'none';
  neutralContainer.style.display = 'none';
  illegalContainer.style.display = 'none';

  btnLegal.classList.remove('active');
  btnNeutral.classList.remove('active');
  btnIllegal.classList.remove('active');
}

// Při kliknutí na "Legální možnosti"
btnLegal.addEventListener('click', () => {
  resetView();
  legalContainer.style.display = 'block';
  btnLegal.classList.add('active');
});

// Při kliknutí na "Neutrální možnosti"
btnNeutral.addEventListener('click', () => {
  resetView();
  neutralContainer.style.display = 'block';
  btnNeutral.classList.add('active');
});

// Při kliknutí na "Nelegální možnosti"
btnIllegal.addEventListener('click', () => {
  resetView();
  illegalContainer.style.display = 'block';
  btnIllegal.classList.add('active');
});
