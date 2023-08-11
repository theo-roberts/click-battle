let playerHealth = 50, computerHealth = 50, playerDamage = 0, computerDamage = 0; computerHealthPercentage = 100; playerHealthPercentage = 100;
let critHitNumber = 0;
const sword = [2, 3, 4, 5, 6, 7, 8]
const spear = [0, 0, 3, 5, 7]
const mace = [0,0,0,7,7,10]
const weaponChoice = [sword, spear, mace]

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function getComputerWeapon(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const choice = arr[randomIndex];
    return choice;
}

function getWeaponDamage(arr){
    const weapon = Math.floor(Math.random() * arr.length);
    const damage = arr[weapon];
    return damage;
}

document.getElementById('sword').addEventListener('click', function(){
    playerWeaponChoice = sword
    var elmntToView = document.getElementById("fightarena");
    elmntToView.scrollIntoView({ behavior: "smooth"}); 
    playerweapon.src = "../click-battle/images/sword.png"
    document.getElementById('fightbtn').disabled = false;
    document.getElementById('sword').disabled = true;
    document.getElementById('spear').disabled = true;
    document.getElementById('mace').disabled = true;
})

document.getElementById('spear').addEventListener('click', function(){
    playerWeaponChoice = spear
    var elmntToView = document.getElementById("fightarena");
    elmntToView.scrollIntoView({ behavior: "smooth"});
    playerweapon.src = "../click-battle/images/spear.png"
    document.getElementById('fightbtn').disabled = false;
    document.getElementById('sword').disabled = true;
    document.getElementById('spear').disabled = true;
    document.getElementById('mace').disabled = true;
})

document.getElementById('mace').addEventListener('click', function(){
    playerWeaponChoice = mace
    var elmntToView = document.getElementById("fightarena");
    elmntToView.scrollIntoView({ behavior: "smooth"});
    playerweapon.src = "../click-battle/images/mace.png"
    document.getElementById('fightbtn').disabled = false;
    document.getElementById('sword').disabled = true;
    document.getElementById('spear').disabled = true;
    document.getElementById('mace').disabled = true;
})

document.getElementById('fightbtn').addEventListener('click', function(){
    document.getElementById('fightbtn').disabled = true;
    crithitindicator = 0
    playerDamage = getWeaponDamage(playerWeaponChoice)
    critHitNumber = getRandomNumber(1,10)
    isCritHit()
    document.querySelector('#playerweapon').classList.add('playerattack');
    playerHit();
    setTimeout(()=>{
        document.querySelector('#playerweapon').classList.remove('playerattack')
    }, 150);
    computerHealth = computerHealth - playerDamage;
    updateComputerHealthPercentage()
    updateComputerHealth();
    checkWinner()
    setTimeout(()=>{
        document.querySelector('#computerweapon').classList.add('computerattack');
        computerHit();
        setTimeout(()=>{
        document.querySelector('#computerweapon').classList.remove('computerattack')
        }, 150);
        updatePlayerHealth()
        document.getElementById('fightbtn').disabled = false;
    }, 1200);
    computerDamage = getWeaponDamage(computerWeaponChoice)
    playerHealth = playerHealth - computerDamage;
    updatePlayerHealthPercentage()
    checkWinner();
});

function updateComputerHealthPercentage(){
    if (computerHealth <= 0){
        computerHealthPercentage = 0
    }
    else {
        computerHealthPercentage = (computerHealth / 50) * 100
    }
}

function updatePlayerHealthPercentage(){
    if (playerHealth <= 0){
        playerHealthPercentage = 0
    }
    else {
        playerHealthPercentage = (playerHealth / 50) * 100
    }
}



function updateComputerHealth(){
    const computerhealth = document.getElementById('computerhealth')
    computerhealth.style.width = computerHealthPercentage + '%'
}

function updatePlayerHealth(){
    const playerhealth = document.getElementById('playerhealth')
    playerhealth.style.width = playerHealthPercentage + '%'
}

let crithitindicator = 0
function isCritHit(){
    if(playerDamage == 0){
    null
    }
    else if(playerWeaponChoice == spear && critHitNumber <= 3 || 
        playerWeaponChoice == sword && critHitNumber == 5
        || playerWeaponChoice == mace && critHitNumber <=5){
        playerDamage = playerDamage * 2
        crithitindicator = 1
    }
    else (null)
}

function playerHit(){
    playerhit.classList.remove('crithit');
    computerhit.textContent = null;
    if(crithitindicator == 1){
        playerhit.textContent = playerDamage;
        playerhit.classList.add('crithit');
    }
    else if(playerDamage == 0){
        playerhit.textContent = 'MISS'
    }
    else
        playerhit.textContent = playerDamage;
}


function computerHit(){
    playerhit.classList.remove('crithit');
    playerhit.textContent = null;
    if(computerDamage == 0){
        computerhit.textContent = 'MISS'
    }
    else
        computerhit.textContent = computerDamage;
 
}

let modal = document.getElementById("winnerpopup");
let winnertext = document.getElementById('winnertext')
let replaybtn = document.getElementById('replaybtn')

function checkWinner(){
    if(playerHealth <= 0){
        setTimeout(()=>{
            modal.style.display = "block";
            winnertext.textContent = 'YOU LOSE'
            return;
        }, 2000);
    }
    else if (computerHealth <= 0){
        setTimeout(()=>{
        modal.style.display = "block";
        winnertext.textContent = 'YOU WIN';
        return;
        }, 750);
    }
}

replaybtn.onclick = function() {
    location.reload()
    let startAgain = document.getElementById("weaponchoice");
    startAgain.scrollIntoView();
}

// hover over weapon buttons //
//sword//
document.getElementById('sword').addEventListener('mouseenter', function(){
    weaponstats.src = "../click-battle/images/sword.png"
})
document.getElementById('sword').addEventListener('mouseleave', function(){
   weaponstats.src = null
})
//spear//
document.getElementById('spear').addEventListener('mouseenter', function(){
    weaponstats.src = "../click-battle/images/spear.png"
})
document.getElementById('spear').addEventListener('mouseleave', function(){
   weaponstats.src = null
})
//mace//
document.getElementById('mace').addEventListener('mouseenter', function(){
    weaponstats.src = "../click-battle/images/mace.png"
})
document.getElementById('mace').addEventListener('mouseleave', function(){
   weaponstats.src = null
})



window.addEventListener("load", function() {
    computerWeaponChoice = getComputerWeapon(weaponChoice);
    if (computerWeaponChoice == mace){
        computerweapon.src = "../click-battle/images/mace.png"
    }
    else if (computerWeaponChoice == sword){
        computerweapon.src = "../click-battle/images/sword.png"
    }
    else if (computerWeaponChoice == spear){
        computerweapon.src = "../click-battle/images/spear.png"
    }
});
