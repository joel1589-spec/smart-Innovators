const menuBtn=document.getElementById('menuBtn');const navLinks=document.getElementById('navLinks');menuBtn?.addEventListener('click',()=>navLinks.classList.toggle('open'));document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.15});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));





// Envoi du formulaire contact vers Formspree / Email
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.textContent;

  btn.textContent = "Envoi en cours...";
  btn.disabled = true;

  try {
    const data = new FormData(contactForm);

    const response = await fetch(contactForm.action, {
      method: "POST",
      body: data,
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      if (formSuccess) formSuccess.style.display = "block";
      contactForm.reset();
    } else {
      alert("Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par email.");
    }
  } catch (error) {
    alert("Erreur réseau. Vérifiez votre connexion ou contactez-nous directement à smartinnovators294@gmail.com.");
  }

  btn.textContent = originalText;
  btn.disabled = false;
});
