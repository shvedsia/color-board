const SQUARE_NUMBER = 400;
const colors = ['#CC0120', '#FF9833', '#99FAF1', '#C2CC33', '#C29566', '#CC99FA'];

const board = document.querySelector('#board');

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}

const setColor = (el) => {
    const color = getRandomColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

const removeColor = (el) => {
    el.style.backgroundColor = '#1d1d1d';
    el.style.boxShadow = `0 0 2px #000`;
}

for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    board.append(square);
}
