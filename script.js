let playerHealth = 50, computerHealth = 50, playerDamage = 0, computerDamage = 0

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

document.querySelector("script").addEventListener('load', function(){
    const playerhealth = document.getElementById('playerhealth')
    const computerhealth = document.getElementById('computerhealth')
    playerhealth.textContent = (playerHealth)
    computerhealth.textContent = (computerHealth)
});

document.getElementById("fightbtn").addEventListener('click', function(){
    playerDamage = getRandomNumber(1,10);
    computerDamage = getRandomNumber(1, 10);
    document.querySelector('#playercharacter').classList.add('playerattack');
    setTimeout(()=>{
        document.querySelector('#playercharacter').classList.remove('playerattack')
    }, 100);
    playerHealth = playerHealth - computerDamage;
    computerHealth = computerHealth - playerDamage;
    updateComputerHealth();
    setTimeout(()=>{
        document.querySelector('#computercharacter').classList.add('computerattack');
        const playerhealth = document.getElementById('playerhealth');
        playerhealth.textContent = (playerHealth);
        setTimeout(()=>{
            document.querySelector('#computercharacter').classList.remove('computerattack')
        }, 100);
    }, 1200);
});

function updateComputerHealth(){
    const computerhealth = document.getElementById('computerhealth')
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




