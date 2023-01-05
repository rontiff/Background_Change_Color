// body
const body = document.querySelector('body');
// random
const random = document.querySelector('.random');
const color = ['red','blue','green','yellow','grey','pink','violet','white']
// fixed color
const red=document.querySelector('.red');
const blue=document.querySelector('.blue');
const green=document.querySelector('.green');
const yellow=document.querySelector('.yellow');
const grey=document.querySelector('.grey');
const pink=document.querySelector('.pink');
const violet=document.querySelector('.violet');
const white=document.querySelector('.white');

random.addEventListener('click',function(e){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.background= color[colorIndex]
});
red.addEventListener('click',function(e){
    body.style.background='red';
});
blue.addEventListener('click',function(e){
    body.style.background='blue';
});
green.addEventListener('click',function(e){
    body.style.background='greenyellow';
});
yellow.addEventListener('click',function(e){
    body.style.background='yellow';
});
grey.addEventListener('click',function(e){
    body.style.background='grey';
});
pink.addEventListener('click',function(e){
    body.style.background='pink';
});
violet.addEventListener('click',function(e){
    body.style.background='violet';
});
white.addEventListener('click',function(e){
    body.style.background='white';
});


