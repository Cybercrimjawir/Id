function cekPassword(){

let pass=document.getElementById("password").value;

if(pass!="Alvin"){

document.getElementById("error").innerHTML="❌ Password Salah";

return;

}

document.getElementById("login").style.display="none";
document.getElementById("loading").style.display="block";

mulaiLoading();

}

function mulaiLoading(){

let progress=0;

const bar=document.getElementById("progress");
const persen=document.getElementById("persen");

let load=setInterval(()=>{

progress++;

bar.style.width=progress+"%";
persen.innerHTML=progress+"%";

if(progress>=100){

clearInterval(load);

document.getElementById("loading").style.display="none";

matrix();

}

},35);

}

function matrix(){

const canvas=document.getElementById("matrix");
const ctx=canvas.getContext("2d");

canvas.style.display="block";

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const huruf="01";
const size=18;

const columns=Math.floor(canvas.width/size);

const drops=[];

for(let i=0;i<columns;i++){

drops[i]=1;

}

const animasi=setInterval(()=>{

ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff00";
ctx.font=size+"px monospace";

for(let i=0;i<drops.length;i++){

let text=huruf[Math.floor(Math.random()*huruf.length)];

ctx.fillText(text,i*size,drops[i]*size);

if(drops[i]*size>canvas.height&&Math.random()>0.975){

drops[i]=0;

}

drops[i]++;

}

},33);

setTimeout(()=>{

clearInterval(animasi);

canvas.style.display="none";

document.getElementById("system").style.display="block";

glitchTyping();

},3500);

}

function glitchTyping(){

const target=document.getElementById("typing");

const text="[ SYSTEM LOADED ]";

const glitch="#$%@&!?";

let i=0;

let hasil="";

const animasi=setInterval(()=>{

if(i>=text.length){

clearInterval(animasi);

document.getElementById("userinfo").style.display="block";

return;

}

if(text[i]==" "){

hasil+=" ";

target.textContent=hasil;

i++;

return;

}

hasil+=glitch[Math.floor(Math.random()*glitch.length)];

target.textContent=hasil;

setTimeout(()=>{

hasil=hasil.slice(0,-1)+text[i];

target.textContent=hasil;

},80);

i++;

},120);

}
