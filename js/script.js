const div = document.querySelector('.row');

// Array con oggetti

const ourTeam = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    imgProfilo: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    imgProfilo: 'angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manage',
    imgProfilo: 'walter-gordon-office-manager.jpg',
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    imgProfilo: 'angela-lopez-social-media-manager.jpg',
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    imgProfilo: 'scott-estrada-developer.jpg',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    imgProfilo: 'barbara-ramos-graphic-designer.jpg',
  },
];

/* Ciclo forEach applicando un'azione a ciascun elemento di un array.
 */

ourTeam.forEach((member) => {
  console.log(member.nome);
  console.log(member.ruolo);
  console.log(member.imgProfilo);
  div.innerHTML += `
    <div class ='col-4'>
      <div class ='card mb-4'>
        <img src="img/${member.imgProfilo}"> 
        <h5 class ='pt-3'>${member.nome}</h5> 
        <p>${member.ruolo}</p> 
      </div>
    </div>`;
});
