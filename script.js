let clickCount = 0;
let clicksPerClick = 1;
let upgradeCost = 10;
let superUpgradeCost = 100;
let clickMultiplier = 1;
let superUpgradeActive = false;
let timerInterval;
document.getElementById('clicker-image').addEventListener('click', () => {
    clickCount += clicksPerClick * clickMultiplier;
    document.getElementById('click-count').textContent = clickCount;
    const giraffeSound = new Audio(document.getElementById('giraffe-sound').src);
    giraffeSound.play();
});
document.getElementById('upgrade-btn').addEventListener('click', () => {
   const leavesSound = document.getElementById('leaves-sound');
   leavesSound.play();
   if (clickCount >= upgradeCost) {
        clickCount -= upgradeCost;
        clicksPerClick++;
        document.getElementById('click-count').textContent = clickCount;
        alert('CONGRATULATIONS YOU GOT UPGRADED. NOW CLICK MORE FOR ANOTHER UPGRADE!');
        upgradeCost *= 2;
        document.getElementById('upgrade-cost').textContent = upgradeCost;
    } else {
        alert('YOU DON\'T HAVE ENOUGH GIRAFFES FOR AN UPGRADE. TRY CLICKING MORE TO GET UPGRADED!');
    }
});
document.getElementById('super-upgrade-btn').addEventListener('click', () => {
    if (clickCount >= superUpgradeCost) {
        clickCount -= superUpgradeCost;
        clickMultiplier *= 5;
        document.getElementById('click-count').textContent = clickCount;
        alert('CONGRATULATIONS YOU GOT A SUPER UPGRADE. NOW EACH CLICK IS MULTIPLIED TIMES 5 FOR 10 SECONDS!');
        const superUpgradeSound = document.getElementById('super-upgrade-sound');
        superUpgradeSound.play();
        superUpgradeCost *= 5;
        let timeLeft = 10;
        document.getElementById('time-left').textContent = timeLeft;
        document.getElementById('timer').style.display = 'block';
        superUpgradeActive = true;
        timerInterval = setInterval(() => {
            timeLeft--;
            document.getElementById('time-left').textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                clickMultiplier /= 5;
                alert('THE SUPER UPGRADE HAS EXPIRED. CLICK MULTIPLIER IS BACK TO NORMAL.');
                superUpgradeActive = false;
                document.getElementById('timer').style.display = 'none';
            }
        }, 1000);
        document.getElementById('super-upgrade-cost').textContent = superUpgradeCost;
    } else {
        alert('YOU DON\'T HAVE ENOUGH GIRAFFES FOR A SUPER UPGRADE. KEEP CLICKING!');
    }
});
document.getElementById('start-game-image').addEventListener('click', function() {
    document.getElementById('fullscreen-start').style.display = 'none';
    document.getElementById('game-section').style.display = 'block';
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.5;
    backgroundMusic.play();
});
document.addEventListener("DOMContentLoaded", function() {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.oncanplaythrough = function() {
    console.log("Background music is ready to play.");
    };
    backgroundMusic.onerror = function() {
        console.log("Error: Cannot load background music.");
    };
});