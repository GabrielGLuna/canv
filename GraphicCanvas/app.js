const canvas = document.getElementById("#canva");
const ctx = canvas.getContext("2d");

ctx.strokeRect(10,10,100,100);
ctx.fillRect(20,20,80,80);
ctx.clearRect(30,30,60,60);
ctx.fillStyle = 'rgb(255,0,255)'
ctx.fillRect(40,40,40,40);

ctx.fillStyle = 'rgb(0,0,255)';

ctx.beginPath();
ctx.moveTo(60, 50);
ctx.lineTo(75 ,70);
ctx.lineTo(45, 70);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'rgb(0,255,0)';
ctx.arc(60,62,5,0, Math.PI * 2, true);
ctx.fill();

ctx.fillStyle = 'rgb(0,255,255)';
ctx.arc(200,200,100,0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(250,180,20,0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(150,180,20,0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(200,220,60,0, Math.PI, false);
ctx.fill();




