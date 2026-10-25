// Mobilni meni
const dugme = document.querySelector('.meni-dugme');
const meni = document.querySelector('.meni');
dugme.addEventListener('click', () => {
  const otvoren = meni.classList.toggle('otvoren');
  dugme.setAttribute('aria-expanded', otvoren);
});

// Galerija: klik na sliku je uveća
const slike = document.querySelectorAll('.galerija img');
if (slike.length) {
  const okno = document.createElement('div');
  okno.className = 'svetlo-okno';
  okno.innerHTML = '<img alt="">';
  document.body.appendChild(okno);
  const velika = okno.querySelector('img');
  slike.forEach(s => s.addEventListener('click', () => {
    velika.src = s.src; velika.alt = s.alt;
    okno.classList.add('otvoreno');
  }));
  okno.addEventListener('click', () => okno.classList.remove('otvoreno'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') okno.classList.remove('otvoreno'); });
}

// Kontakt forma (prikazuje samo poruku; za slanje je potreban server)
const forma = document.querySelector('#forma');
if (forma) {
  forma.addEventListener('submit', e => {
    e.preventDefault();
    const ime = forma.ime.value.trim();
    document.querySelector('#status').textContent = `Hvala, ${ime}! Vaša poruka je poslata.`;
    forma.reset();
  });
}
