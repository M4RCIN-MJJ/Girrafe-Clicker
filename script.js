let clickCount = 0;
let clicksPerClick = 1;
let upgradeCost = 10;
let superUpgradeCost = 100;
let clickMultiplier = 1;
let superUpgradeActive = false;

// Handle the "PLAY" button click to start the game
document.getElementById('startGry').addEventListener('click', function() {
    document.getElementById('fullscreen-start').style.display = 'none';
    document.getElementById('game-section').style.display = 'block';
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.5;
    backgroundMusic.play();
});

// Handle the "HOW TO PLAY" button to show the info box
document.getElementById('infoGry').addEventListener('click', function() {
    document.getElementById('fullscreen-start').style.display = 'none';
    document.getElementById('infobox').style.display = 'block';
});

// Handle closing the "How to Play" info box
document.getElementById('close-infobox').addEventListener('click', function() {
    document.getElementById('infobox').style.display = 'none';
    document.getElementById('fullscreen-start').style.display = 'flex';
});

// Handle clicks on the giraffe image to collect points
document.getElementById('clicker-image').addEventListener('click', () => {
    clickCount += clicksPerClick * clickMultiplier;
    document.getElementById('click-count').textContent = clickCount;
    const giraffeSound = new Audio(document.getElementById('giraffe-sound').src);
    giraffeSound.play();
});

// Handle regular upgrades
document.getElementById('upgrade-btn').addEventListener('click', function() {
    alert(`Upgrade button clicked! Current click count: ${clickCount}, Upgrade cost: ${upgradeCost}`);
    
    if (clickCount >= upgradeCost) {
        clickCount -= upgradeCost;
        clicksPerClick += 1;  // Increase the number of clicks per click
        upgradeCost = Math.floor(upgradeCost * 1.5); // Increase upgrade cost
        updateGame();
        alert(`Upgrade successful! New click count: ${clickCount}, New upgrade cost: ${upgradeCost}`);
    } else {
        alert("Not enough giraffes for regular upgrade.");
    }
});

// Handle super upgrades
document.getElementById('super-upgrade-btn').addEventListener('click', function() {
    alert(`Super upgrade button clicked! Current click count: ${clickCount}, Super upgrade cost: ${superUpgradeCost}`);
    
    if (clickCount >= superUpgradeCost && !superUpgradeActive) {
        clickCount -= superUpgradeCost;
        superUpgradeActive = true;  // Enable super upgrade effect
        clickMultiplier = 2;  // Double the click value multiplier
        superUpgradeCost = Math.floor(superUpgradeCost * 1.5); // Increase super upgrade cost
        updateGame();
        alert("Super upgrade successful! Click multiplier is now 2x.");
    } else {
        alert("Not enough giraffes or super upgrade already active.");
    }
});

// Update the game interface (display new values for clicks, upgrade costs, etc.)
function updateGame() {
    document.getElementById('click-count').textContent = clickCount;
    document.getElementById('click-value').textContent = clicksPerClick;
    document.getElementById('upgrade-cost').textContent = upgradeCost;
    document.getElementById('super-upgrade-cost').textContent = superUpgradeCost;
}
