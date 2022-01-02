let fields = [];
let tableData = document.querySelectorAll('td');
let currentPlayer = 'circle';
let gameActive = true;
let gameTail = false;

function draw(position) {
     currentPlayer = (fields[position] == null) ? fields[position] = currentPlayer : fields[position];
    if (gameActive) {
        if (currentPlayer == 'circle') {
            currentPlayer = 'cross';
            tableData[position].classList.add('circle');
        } else {
            currentPlayer = 'circle';
            tableData[position].classList.add('cross');
        }
        changePlayerSlider();
        checkWinner();
    }
    showRestartButton();
}

function checkWinner() {

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        console.log('Gewonnen: ' + fields[0]);
        gameActive = false;
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        console.log('Gewonnen: ' + fields[3]);
        gameActive = false;

    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        console.log('Gewonnen: ' + fields[6]);
        gameActive = false;
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        console.log('Gewonnen: ' + fields[0]);
        gameActive = false;
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        console.log('Gewonnen: ' + fields[1]);
        gameActive = false;
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        console.log('Gewonnen: ' + fields[2]);
        gameActive = false;
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        console.log('Gewonnen: ' + fields[0]);
        gameActive = false;
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        console.log('Gewonnen: ' + fields[2]);
        gameActive = false;
    }
    isGameTail();
    console.log(gameTail);
}

function isGameTail() {
    gameTail = (fields.filter(String).length == 9) ? true : false;
}

function showRestartButton() {
    if (!gameActive) {
        document.getElementById('restart').classList.remove('d-none');
    }
}

function restartGame() {
    fields = [];
    gameActive = true;
    currentPlayer = 'circle';
    for (let i = 0; i < tableData.length; i++) {
        tableData[i].classList.remove('circle', 'cross');
    }
    changePlayerSlider();
    document.getElementById('restart').classList.add('d-none');
}



function changePlayerSlider() {
    let playerCross = document.getElementById('player-cross');
    document.getElementById('player-slider').style.width = playerCross.offsetWidth + "px";
    document.getElementById('player-slider').style.height = playerCross.offsetHeight + "px";
    if (currentPlayer == 'cross') {
        document.getElementById('player-slider').style.transform = 'translateX(0%)';
    } else {
        document.getElementById('player-slider').style.transform = '';
    }
}