const btnColor = document.querySelector('.btnColor');
const bodyBackground = document.querySelector('body');

btnColor.addEventListener('click', changeColor);

const colors = ['red', 'green', 'yellow', 'blue', 'skyblue']

function changeColor(){
    let random = Math.floor(Math.random()*colors.length);
    bodyBackground.style.backgroundColor = colors[random];
}