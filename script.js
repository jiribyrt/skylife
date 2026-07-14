const cta = document.querySelector(".cta");
if (cta) {
  cta.addEventListener("click", () => {
    alert("Více informací brzy!");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("copy-button");
  const ipElement = document.getElementById("server-ip");
  const copiedText = document.getElementById("copied-text");

  if (copyButton) {
    copyButton.addEventListener("click", () => {
      const ip = ipElement.textContent;

      navigator.clipboard.writeText(ip).then(() => {
        copiedText.style.display = "inline";
        setTimeout(() => {
          copiedText.style.display = "none";
        }, 2000);
      }).catch(err => {
        console.error("Nepodařilo se zkopírovat IP:", err);
      });
    });
  }
});


const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
