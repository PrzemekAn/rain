const redHeart = '❤️';
const blueHeart = '💙';
const greenHeart = '💚';
const yellowHeart = '💛';

const heartTab = [redHeart, blueHeart, greenHeart, yellowHeart];


const rain = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    let heartChanger = Math.round(Math.random() * 3);
    let speedChanger = Math.round(Math.random() * 5);
    heart.innerText = heartTab[heartChanger];
    const width = window.innerWidth;
    let yPosition = Math.round(Math.random() * width);
    heart.style.left = yPosition + 'px';
    heart.style.animationDuration = speedChanger + 's';
    document.querySelector('body').appendChild(heart);
}

setInterval(rain, 75);