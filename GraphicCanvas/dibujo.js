const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");


ctx.fillStyle = 'rgb(0,0,0)'
ctx.fillRect(135,101,130,70);
ctx.fillStyle = 'rgb(0,0,0)';
ctx.arc(200,170,70,0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'rgb(0,0,0)';
ctx.ellipse(200,220,60,50,0,0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'rgb(255,255,255)';
ctx.ellipse(225,165,20,15,30,0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'rgb(0,0,0)';
ctx.ellipse(225,165,15,10,30,0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'rgb(255,255,255)';
ctx.ellipse(175,165,20,15,30,0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'rgb(0,0,0)';
ctx.ellipse(175,165,15,10,30,0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();

ctx.fillStyle = 'rgb(0,0,0)'
ctx.fillRect(165,245,20,30);
ctx.beginPath();
ctx.fillStyle = 'rgb(0,0,0)'
ctx.fillRect(215,245,20,30);


ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(200, 190);
ctx.lineTo(195, 180);
ctx.lineTo(205, 180);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.moveTo(185, 190);
ctx.quadraticCurveTo(200, 210, 200, 185);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.moveTo(215, 190);
ctx.quadraticCurveTo(200, 210, 200, 185);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.moveTo(225, 260);
ctx.quadraticCurveTo(320, 240, 290, 220);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.moveTo(290, 220);
ctx.quadraticCurveTo(260, 220, 310, 200);
ctx.stroke();