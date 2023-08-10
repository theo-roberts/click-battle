let playerHealth = 50, computerHealth = 60, playerDamage = 0, computerDamage = 0; computerHealthPercentage = 100; playerHealthPercentage = 100;
let critHitNumber = 0;

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

document.querySelector("script").addEventListener('load', function(){

});

document.getElementById('fightbtn').addEventListener('click', function(){
    document.getElementById('fightbtn').disabled = true;
    playerDamage = getRandomNumber(0,10);
    computerDamage = getRandomNumber(0, 10);
    critHitNumber = getRandomNumber(1,10)
    isCritHit()
    document.querySelector('#playerweapon').classList.add('playerattack');
    playerHit();
    setTimeout(()=>{
        document.querySelector('#playerweapon').classList.remove('playerattack')
    }, 100);
    playerHealth = playerHealth - computerDamage;
    computerHealth = computerHealth - playerDamage;
    playerHealthPercentage = (playerHealth / 50) * 100
    computerHealthPercentage = (computerHealth / 60) * 100
    updateComputerHealth();
    setTimeout(()=>{
        hittype.textContent = null
        document.querySelector('#computerweapon').classList.add('computerattack');
        computerHit();
        setTimeout(()=>{
            document.querySelector('#computerweapon').classList.remove('computerattack')
        }, 100);
        updatePlayerHealth()
        document.getElementById('fightbtn').disabled = false;
    }, 1200);
    
    console.log()
});

function updateComputerHealth(){
    const computerhealth = document.getElementById('computerhealth')
    computerhealth.style.width = computerHealthPercentage + '%'
}

function updatePlayerHealth(){
    const playerhealth = document.getElementById('playerhealth')
    playerhealth.style.width = playerHealthPercentage + '%'
}

function checkWinner(){
    if(playerHealth <= 0){
        alert('you lose')
    }
    else if (computerHealth <= 0){
        alert ('you win')
    }
}

function isCritHit(){
    if(playerDamage == 0){
    null
    }
    else if(critHitNumber == 5){
        playerDamage = playerDamage + 10
    }
    else(null)
}

function playerHit(){
    if(playerDamage > 10){
        const hit = document.querySelector('#hit');
        const hittype = document.querySelector('#hittype');
        hit.textContent = playerDamage;
        hittype.textContent = 'CRIT'
    }
    else if(playerDamage == 0){
        const hit = document.querySelector('#hit');
        hit.textContent = playerDamage;
        hittype.textContent = 'MISS'
    }
    else
        hit.textContent = playerDamage;
}

function computerHit(){
    const hit = document.querySelector('#hit');
    hit.textContent = (computerDamage)
}