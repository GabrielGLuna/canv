export function createPage(){
    let buttons = ``;
    for(let i = 1; i<=42; i++){
      buttons += `
      <li class="page-item">
      <a class="page-link" href="#" data-id="${i}">${i}</a>
      </li>
      `
    }
    return buttons;
}

  export function createCard(character){
    const card = document.createElement('div');
    card.classList.add('card', 'mt-3', 'bg-secondary-subtitle');
    card.style.width = '18rem';
    const htmlCard = `
    <img src="${ character.image }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${ character.name }</h5>
      <p class="card-text">${ character.status }</p>
      <p class="card-text">${ character.origin.name }</p>
      <a href="#" class="btn btn-success"
       data-bs-toggle="modal" 
       data-bs-target="#exampleModal"
        data-id="${ character.id }">  Ver mas</a>
      </div>
      `
      card.innerHTML = htmlCard;
      return card;
    
}

export function createCardModal(character){
    const card = document.createElement('div');
    card.classList.add('card', 'bg-secondary-subtitle');
    card.style.width = '80%';
    card.style.margin = '0 auto';
    let statusColor = '';
    if(character.status=== 'Alive'){
      statusColor = 'bg-success';
    }else if ( character.status ==='Dead'){
      statusColor = 'bg-danger';
    }
    else{
      statusColor = 'bg-secondary';
    }
    const htmlCard = `
    <img src="${ character.image }" class="card-img-top" alt="...">
    <div class="card-body bg-light">
      
      <p class="card-text badge ${statusColor}">STATUS : ${ character.status }</p>
      <p class="card-text badge rounded-pill text-bg-primary">GENDER : ${ character.gender }</p>
      <p class="card-text badge rounded-pill text-bg-dark">ORIGIN :${ character.origin.name }</p>
      <p class="card-text badge rounded-pill text-bg-dark">EPISODE : ${ character.location.name }</p>
      
      </div>
      `
      card.innerHTML = htmlCard;
      return card;
    
}