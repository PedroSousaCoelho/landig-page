const link = document.querySelector('a[href="#sec-noiva"]')
const secnoiva = document.querySelector("#sec-noiva")

link.addEventListener('click', () => {
    secnoiva.scrollIntoView({behavior: 'smooth'})
})

const link2 = document.querySelector('a[href="#nossa-historia"]')
const nossahistoria = document.querySelector("#nossa-historia")

link2.addEventListener('click', () => {
    nossahistoria.scrollIntoView({behavior: 'smooth'})
})

const link3 = document.querySelector('a[href="#como-chegar"]')
const comochegar = document.querySelector("#como-chegar")

link3.addEventListener('click', () => {
    comochegar.scrollIntoView({behavior: 'smooth'})
})

const link4 = document.querySelector('a[href="#contato"]')
const contato = document.querySelector("#contato")

link4.addEventListener('click', () => {
    contato.scrollIntoView({behavior: 'smooth'})
})

const btnMobile = document.getElementById("btn-mb");
const fecharLinks = document.querySelectorAll('.fechar');
const nav = document.getElementById("nav");

btnMobile.addEventListener('click', toggleMenu);

for (let i = 0; i < fecharLinks.length; i++) {
  fecharLinks[i].addEventListener('click', toggleFechar);
}

function toggleMenu() {
  nav.classList.toggle('active');

  for (let i = 0; i < fecharLinks.length; i++) {
    fecharLinks[i].classList.toggle('sumir');
  }
}

function toggleFechar() {
  nav.classList.remove('active');

  for (let i = 0; i < fecharLinks.length; i++) {
    fecharLinks[i].classList.add('sumir');
  }
}
