let playerHealth = 45, computerHealth = 55, playerDamage = 0, computerDamage = 0; computerHealthPercentage = 100; playerHealthPercentage = 100;
let critHitNumber = 0;
let playerWeaponChoice = null
const sword = [2, 3, 4, 5, 6, 7, 8]
const spear = [0,0,3,5]
const mace = [0,0,0,5,5,5]
const spoon = [1,1,2,2,3,3]
const dagger = [3,3,4,4,5,5]
const weaponChoice = [sword, spear, mace, spoon, dagger]

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
    playerWeaponChoice = sword;
    var elmntToView = document.getElementById("fightarena");
    elmntToView.scrollIntoView({ behavior: "smooth"}); 
    playerweapon.src = "../click-battle/images/sword.png"
    document.getElementById('fightbtn').disabled = false;
})

document.getElementById('spear').addEventListener('click', function(){
    playerWeaponChoice = spear;
    var elmntToView = document.getElementById("fightarena");
    elmntToView.scrollIntoView({ behavior: "smooth"});
    playerweapon.src = "../click-battle/images/spear.png"
    document.getElementById('fightbtn').disabled = false;
})

document.getElementById('mace').addEventListener('click', function(){
    playerWeaponChoice = mace;
    var elmntToView = document.getElementById("fightarena");
    elmntToView.scrollIntoView({ behavior: "smooth"});
    playerweapon.src = "../click-battle/images/mace.png"
    document.getElementById('fightbtn').disabled = false;
})

document.getElementById('spoon').addEventListener('click', function(){
    playerWeaponChoice = spoon;
    var elmntToView = document.getElementById("fightarena");
    elmntToView.scrollIntoView({ behavior: "smooth"});
    playerweapon.src = "../click-battle/images/spoon.jpeg"
    document.getElementById('fightbtn').disabled = false;
})

document.getElementById('dagger').addEventListener('click', function(){
    playerWeaponChoice = dagger;
    var elmntToView = document.getElementById("fightarena");
    elmntToView.scrollIntoView({ behavior: "smooth"});
    playerweapon.src = "../click-battle/images/dagger.png"
    document.getElementById('fightbtn').disabled = false;
})


document.getElementById('fightbtn').addEventListener('click', function(){
    document.getElementById('fightbtn').disabled = true;
    crithitindicator = 0
    critHitNumber = getRandomNumber(1,20);
    playerDamage = getWeaponDamage(playerWeaponChoice);
    isCritHit();
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
    console.log(computerhit.classList)
});

function updateComputerHealthPercentage(){
    if (computerHealth <= 0){
        computerHealthPercentage = 0
    }
    else {
        computerHealthPercentage = (computerHealth / 55) * 100
    }
}

function updatePlayerHealthPercentage(){
    if (playerHealth <= 0){
        playerHealthPercentage = 0
    }
    else {
        playerHealthPercentage = (playerHealth / 45) * 100
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
    else if(playerWeaponChoice == spear && critHitNumber <=4 || 
        playerWeaponChoice == sword && critHitNumber <=5 || 
        playerWeaponChoice == mace && critHitNumber <=10 ||
        playerWeaponChoice == spoon && critHitNumber <= (1 || 2) ||
        playerWeaponChoice == dagger && critHitNumber <=6){
        playerDamage = playerDamage * 2
        crithitindicator = 1
    }
    else (null)
}

function playerHit(){
    playerhit.classList.remove('crithit');
    playerhit.classList.remove('basichit');
    playerhit.classList.remove('misshit');
    computerhit.classList.remove('basichit');
    computerhit.classList.remove('misshit');
    computerhit.textContent = null;
    if(crithitindicator == 1){
        playerhit.textContent = playerDamage;
        playerhit.classList.add('crithit');
    }
    else if(playerDamage == 0){
        playerhit.textContent = playerDamage;
        playerhit.classList.add('misshit');
    }
    else {
        playerhit.textContent = playerDamage;
        playerhit.classList.add('basichit');
    }
}


function computerHit(){
    playerhit.classList.remove('crithit');
    playerhit.classList.remove('basichit');
    playerhit.classList.remove('misshit');
    computerhit.classList.remove('basichit');
    computerhit.classList.remove('misshit');
    playerhit.textContent = null;
    if(computerDamage == 0){
        computerhit.textContent = computerDamage;
        computerhit.classList.add('misshit');
    }
    else {
        computerhit.textContent = computerDamage;
        computerhit.classList.add('basichit');
    }
}

let modal = document.getElementById("winnerpopup");
let winnertext = document.getElementById('winnertext')
let replaybtn = document.getElementById('replaybtn')
let restartbtn = document.getElementById('restartbtn')

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

restartbtn.onclick = function() {
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
//spoon//
document.getElementById('spoon').addEventListener('mouseenter', function(){
    weaponstats.src = "../click-battle/images/spoon.jpeg"
})
document.getElementById('spoon').addEventListener('mouseleave', function(){
   weaponstats.src = null
})
//dagger//
document.getElementById('dagger').addEventListener('mouseenter', function(){
    weaponstats.src = "../click-battle/images/dagger.png"
})
document.getElementById('dagger').addEventListener('mouseleave', function(){
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
    else if (computerWeaponChoice == spoon){
        computerweapon.src = "../click-battle/images/spoon.jpeg"
    }
    else if (computerWeaponChoice == dagger){
        computerweapon.src = "../click-battle/images/dagger.png"
    }
});
