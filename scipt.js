let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e) {
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
//console.log(ctx);

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'NightBorne.png';
const spriteWidth = 80;
const spriteHeight = 80;


let gameFrame = 0;
const staggerFrames = 18;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 9,
    },
    {
        name: 'run',
        frames: 6,
    },
    {
        name: 'attack',
        frames: 12,
    },
    {
        name: 'hurt',
        frames: 5,
    },
    {
        name: 'defeat',
        frames: 23,
    },
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let i = 0; i < state.frames; i++){
        let positionx = i * spriteWidth;
        let positiony = index * spriteHeight;
        frames.loc.push({x: positionx, y: positiony});
    }
    spriteAnimations[state.name] = frames;
});
console.log(animationStates);

function animate() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);   

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();