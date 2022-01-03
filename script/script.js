let fields = [];
let tableData = document.querySelectorAll('td');
let currentPlayer = 'cross';
let gameTail = false;
let gameOver = false;

function addShape(id) {
    if (!fields[id] && !gameOver) {
        if (!fields[id]) {
            fields[id] = currentPlayer;
            (currentPlayer == 'cross') ? currentPlayer = 'circle' : currentPlayer = 'cross';
            changePlayerSlider();
            checkWinner();
            draw();
            showRestartButton();
        }
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'cross') {
            tableData[i].classList.add('cross', 'bounceIn');
        }
        if (fields[i] == 'circle') {
            tableData[i].classList.add('circle', 'bounceIn');
        }
    }
}

function checkWinner() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-3').style.transform = "scaleX(1)";
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-1').style.transform = "scaleX(1)";
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-2').style.transform = "scaleX(1)";

    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        console.log('Gewonnen: ' + fields[0]);
        winner = fields[0];
        document.getElementById('line-4').style.transform = "rotate(90deg) scaleX(1)";

    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        console.log('Gewonnen: ' + fields[1]);
        winner = fields[1];
        document.getElementById('line-5').style.transform = "rotate(90deg) scaleX(1)";
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        console.log('Gewonnen: ' + fields[2]);
        winner = fields[2];
        document.getElementById('line-6').style.transform = "rotate(90deg) scaleX(1)";

    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        console.log('Gewonnen: ' + fields[0]);
        winner = fields[0];
        document.getElementById('line-7').style.transform = "rotate(45deg) scaleX(1.1)";
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        console.log('Gewonnen: ' + fields[2]);
        winner = fields[2];
        document.getElementById('line-8').style.transform = "rotate(-45deg) scaleX(1.1)";

    }
    checkIfTie();
    if (winner) {
        gameOver = true;
        showRestartButton();
    }

}

function checkIfTie() {
    return gameTail = (fields.filter(String).length == 9) ? true : false;

}

function showRestartButton() {
    if (gameOver) {
        document.getElementById('restart').classList.remove('d-none');
    }
}

function restartGame() {
    fields = [];
    gameOver = false;
    currentPlayer = 'circle';
    removeSpapes();
    changePlayerSlider();
    removeAttributes();
    document.getElementById('restart').classList.add('d-none');
}

function removeSpapes(){
    for (let i = 0; i < tableData.length; i++) {
        tableData[i].classList.remove('circle', 'cross');
    }
}

function removeAttributes(){
    let lines = document.querySelectorAll('[id*="line-"]');
    for (let i = 0; i < lines.length; i++) {
        lines[i].removeAttribute('style');
    }
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