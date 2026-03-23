// Game State
let playerScore = 0;
let cpuScore = 0;

// Elements
const playerScoreEl = document.getElementById('player-score');
const cpuScoreEl = document.getElementById('cpu-score');
const gameStatusEl = document.getElementById('game-status');
const resultOverlay = document.getElementById('result-overlay');
const resultTitle = document.getElementById('result-title');
const resultText = document.getElementById('result-text');
const playerResultIcon = document.getElementById('player-result-icon');
const cpuResultIcon = document.getElementById('cpu-result-icon');
const playAgainBtn = document.getElementById('play-again');

const choices = ['r', 'p', 's'];
const choiceIcons = {
    'r': '🪨',
    'p': '📄',
    's': '✂️'
};
const choiceNames = {
    'r': 'Rock',
    'p': 'Paper',
    's': 'Scissors'
};

// Game Logic Function (Ported from Python)
function checkWinner(player, cpu) {
    if (player === cpu) return 'tie';
    
    if (player === 'r') {
        return cpu === 's' ? 'win' : 'lose';
    }
    if (player === 'p') {
        return cpu === 'r' ? 'win' : 'lose';
    }
    if (player === 's') {
        return cpu === 'p' ? 'win' : 'lose';
    }
}

// Play Game
function play(playerChoice) {
    // CPU Turn
    const cpuChoice = choices[Math.floor(Math.random() * 3)];
    
    // Result
    const result = checkWinner(playerChoice, cpuChoice);
    
    // Update Scores
    if (result === 'win') {
        playerScore++;
        playerScoreEl.innerText = playerScore;
        showResult('YOU WIN!', `Your ${choiceNames[playerChoice]} beats CPU's ${choiceNames[cpuChoice]}!`, playerChoice, cpuChoice, 'win');
    } else if (result === 'lose') {
        cpuScore++;
        cpuScoreEl.innerText = cpuScore;
        showResult('YOU LOSE!', `CPU's ${choiceNames[cpuChoice]} beats your ${choiceNames[playerChoice]}!`, playerChoice, cpuChoice, 'lose');
    } else {
        showResult("IT'S A TIE!", `Both chose ${choiceNames[playerChoice]}.`, playerChoice, cpuChoice, 'tie');
    }
}

// Show Result Overlay
function showResult(title, msg, pChoice, cChoice, type) {
    resultTitle.innerText = title;
    resultText.innerText = msg;
    playerResultIcon.innerText = choiceIcons[pChoice];
    cpuResultIcon.innerText = choiceIcons[cChoice];
    
    // Reset classes
    resultTitle.className = 'text-4xl font-bold mb-4 uppercase italic ';
    if (type === 'win') resultTitle.classList.add('text-green-400', 'win-glow');
    else if (type === 'lose') resultTitle.classList.add('text-red-400', 'lose-glow');
    else resultTitle.classList.add('text-yellow-400', 'tie-glow');
    
    resultOverlay.classList.remove('hidden');
}

// Event Listeners
document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        play(btn.dataset.choice);
    });
});

playAgainBtn.addEventListener('click', () => {
    resultOverlay.classList.add('hidden');
    gameStatusEl.innerHTML = '<p class="text-2xl font-semibold text-gray-300">Make your move!</p>';
});

// Initial greeting in console
console.log("%c Rock Paper Scissors %c Premium Edition ", "color: white; background: #3b82f6; padding: 5px; border-radius: 5px 0 0 5px;", "color: white; background: #db2777; padding: 5px; border-radius: 0 5px 5px 0;");
