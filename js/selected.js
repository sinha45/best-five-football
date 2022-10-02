function playerList(playerName) {

    const playerText = playerName.innerText;

    const olContainer = document.getElementById('player-selection');
    const li = document.createElement('li');
    li.innerText = playerText;
    olContainer.appendChild(li);
}


document.getElementById('select-btn-1').addEventListener('click', function () {
    const playerName = document.getElementById('player-name-1');
    playerList(playerName);
});

document.getElementById('select-btn-2').addEventListener('click', function () {
    const playerName = document.getElementById('player-name-2');
    playerList(playerName);
});

document.getElementById('select-btn-3').addEventListener('click', function () {
    const playerName = document.getElementById('player-name-3');
    playerList(playerName);
});
document.getElementById('select-btn-4').addEventListener('click', function () {
    const playerName = document.getElementById('player-name-4');
    playerList(playerName);
});
document.getElementById('select-btn-5').addEventListener('click', function () {
    const playerName = document.getElementById('player-name-5');
    playerList(playerName);
});
document.getElementById('select-btn-6').addEventListener('click', function () {
    const playerName = document.getElementById('player-name-6');
    playerList(playerName);
});
