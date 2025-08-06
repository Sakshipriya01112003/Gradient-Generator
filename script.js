let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

let text = document.getElementById('text');

const hexValues =  () => {
    const values = "0123456789ABCDEF";
    let colors = "#";
    for(let i =0;i<6;i++)
    {
      let val = Math.floor(Math.random()* 16);
      colors += values[val];
    }

    return colors;
}

let randomColor1 = "#b84735";
let randomColor2 = "#008793";

const change1 = () => {
    randomColor1 = hexValues();
    btn1.innerText = randomColor1;
    document.body.style.backgroundImage =  `linear-gradient(to right, 
    ${randomColor1}, ${randomColor2})`;
    text.innerHTML =  `linear-gradient(to right, 
    ${randomColor1}, ${randomColor2})`
}

const change2 = () => {
    randomColor2 = hexValues();
    btn2.innerText = randomColor2;
    document.body.style.backgroundImage = ` linear-gradient(to right, 
    ${randomColor1}, ${randomColor2})`;
    text.innerHTML =` linear-gradient(to right, 
    ${randomColor1}, ${randomColor2})`
}

btn1.addEventListener('click',change1);
btn2.addEventListener('click',change2);


text.addEventListener('click', () => {
     navigator.clipboard.writeText(text.innerText);
})