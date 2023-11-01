const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');
const resultado = document.querySelector('h2');


let direction = 1; // 1-right, 2-down, 3-left, 4-up
let posX = 0;
let posY = 1;

let contador = 0;
resultado.innerHTML = contador;

const snake = [];
snake.push({
    x: 2,
    y: 1,
    xNext: 0,
    yNext: 0,
    pinta: function () {
        ctx.font = '25px Serif';
        ctx.fillText('🦖', this.x * 20, this.y * 20);
    }
});

snake.push({ ...snake[0] });
snake.push({ ...snake[0] });
snake[1].x = 1;
snake[1].xNext = snake[0].x;
snake[1].yNext = snake[0].y;
snake[2].x = 0;
snake[2].xNext = snake[1].x;
snake[2].yNext = snake[1].y;

const comida = {
    x: 0,
    y:0,
    aparece: function(){
        this.x = Math.floor(Math.random() * 30);
        this.y = Math.floor(Math.random() * 20);
    },
    pinta: function(){
        ctx.fillText('🐭', this.x * 20, this.y *20);
    }
}


function nextMove() {
    snake.forEach((mouse, index) => {
        if (index === 0) {
            mouse.x = posX;
            mouse.y = posY;
        } else {
            mouse.x = mouse.xNext;
            mouse.y = mouse.yNext;
            mouse.xNext = snake[index - 1].x;
            mouse.yNext = snake[index - 1].y;
        }
    });
}
let velocidad = 100;

comida.aparece();
setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    snake.forEach(mouse => mouse.pinta());
    comida.pinta();
    nextMove();
if(snake[0].x === comida.x && snake[0].y === comida.y){
    snake.push({...snake[0]});
    comida.aparece();
    contador++;
    resultado.innerHTML = contador;
    console.log(velocidad);
    if(contador % 5 === 0){
        velocidad -=100;
    }
}
    switch (direction) {
        case 1:
            posX++;
            break;
        case 2:
            posY++;
            break;
        case 3:
            posX--;
            break;
        case 4:
            posY--;
            break;
    }
    if (posX > 30) posX = 0;
    if (posX < 0) posX = 30;
    if (posY < 1) posY = 20; // Debes cambiar "<1" a "<=1"
    if (posY > 20) posY = 1; // Debes cambiar "<1" a ">20"
}, velocidad);



snake.forEach(mouse => mouse.pinta());

document.querySelector('body')
    .addEventListener('keydown', (e) => {
        e.preventDefault();
        console.log(e.key);
        switch (e.key) {
            case 'ArrowRight':
                direction = 1;
                break;
            case 'ArrowDown':
                direction = 2;
                break;
            case 'ArrowLeft':
                direction = 3;
                break;
            case 'ArrowUp':
                direction = 4;
                break;
        }
    });