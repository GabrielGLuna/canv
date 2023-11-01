import {createCard, createPage, createCardModal} from './ui.js'
const URL = 'https://rickandmortyapi.com/api';
const containerChar = document.querySelector('.characters');
const pagination = document.querySelector('.pagination');
const modalTitle = document.querySelector('.modal-title')
const modalBody = document.querySelector('.modal-body')

const fetchApi = url => fetch(url).then(response = response.json)



function getCharacter(page=1){
fetch(`${ URL }/character/?page=${page}`)
.then(Response => Response.json())
.then(data => {
    
    const characters = data.results;
    /*characters.forEach(character => {
        const p = document.createElement('p');
        p.innerHTML = character.name;
        containerChar.appendChild(p);
    })*/
    showCharacters(characters);
})
}
function getCharacterbyID(id){
  fetch(`${ URL }/character/${id}`)
  .then(Response => Response.json())
  .then(data => {
      
    const character = data;
    console.log(character);
      modalTitle.innerHTML = character.name;
      modalBody.innerHTML = '';
      modalBody.appendChild(createCardModal(character));
  })
}

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/

function showCharacters(characters){
    containerChar.innerHTML = '';
    characters.forEach(character => {
        containerChar.appendChild(createCard(character));
    });
}

function getButton(e){
  e.preventDefault();
  if(e.target.classList.contains('page-link')){
    const id = e.target.getAttribute('data-id');
    getCharacter(id);
  }
}
function getButtonCard(e){
  e.preventDefault();
  if(e.target.classList.contains('btn')){
    const id = e.target.getAttribute('data-id');
    getCharacterbyID(id);
  }
}
//const page = prompt('Cual página? ')
pagination.innerHTML = createPage();
createPage();

getCharacter();
pagination.addEventListener('click', getButton);
containerChar.addEventListener('click', getButtonCard);