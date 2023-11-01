const lienzo = document.querySelector('#canva');


const ctx= lienzo.getContext('2d');

let drx = 1;
let dry = 1;

let idx = 0;
let idy = 0;
let ini = 0;

function hslColor(h){
    return `hsl(${ h },50%,50%)`;
}

function bolita(x,y){
    ctx.fillStyle = hslColor(ini);
    ctx.beginPath();
    ctx.arc(x,y,15,0,Math.PI * 2);
    ini += 0.5;
    ctx.fill();
}

function cuadrito(x,y){
    ctx.fillStyle = hslColor(ini);
    ini +=2;
    ctx.fillRect(x,y,40,40);
}


setInterval(() =>{
    //ctx.clearRect(0,0,650,400);
    bolita(idx,idy);
    if(drx ===1 && dry ===1){
        idx +=3;
        idy +=3;
    }
    else if(drx ===1 && dry ===2){
        idx +=3;
        idy -=3;
    }
    else if(drx ===2 && dry ===1){
        idx -=3;
        idy +=3;
    }
    else{
        idx -=3;
        idy -=3;
    }

    //Cambiar direcciones
    if(idx> 590) drx=2;
    if(idx< 20) drx=1;
    if(idy> 380) dry=2;
    if(idy< 20) dry=1;
}, 20)