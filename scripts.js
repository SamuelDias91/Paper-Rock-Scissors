const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")
const player = document.querySelector(".player")
const cpu = document.querySelector(".cpu")


let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "Tie! 🟰"
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper') ){

            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber

        result.innerHTML = "You WIN! 😀"
    } else {

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber

        result.innerHTML = "You LOSE! 🤖"
    }

    player.innerHTML = "Player ▹ " + human.toUpperCase()
    cpu.innerHTML = "CPU ▹ " + machine.toUpperCase()
}