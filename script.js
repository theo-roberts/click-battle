let playerHealth = 50, computerHealth = 50, playerDamage = 0, computerDamage = 0

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

document.getElementById("beginbtn").addEventListener('click', function(){
    const playerhealth = document.getElementById('playerhealth')
    const computerhealth = document.getElementById('computerhealth')
    playerhealth.textContent = (playerHealth)
    computerhealth.textContent = (computerHealth)
});

document.getElementById("playerbtn").addEventListener('click', function(){
    playerDamage = getRandomNumber(1,10);
    computerDamage = getRandomNumber(1, 10);
    playerHealth = playerHealth - computerDamage;
    computerHealth = computerHealth - playerDamage;
    console.log(computerHealth, playerHealth, playerDamage, computerDamage);
    updateHealth(playerHealth, computerHealth);
    checkWinner()
});

function updateHealth(playerHealth, computerHealth){
    const playerhealth = document.getElementById('playerhealth')
    const computerhealth = document.getElementById('computerhealth')
    playerhealth.textContent = (playerHealth)
    computerhealth.textContent = (computerHealth)
}

function checkWinner(){
    if(playerHealth <= 0){
        alert('you lose')
    }
    else if (computerHealth <= 0){
        alert ('you win')
    }
}
