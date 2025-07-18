function getCompChoice() {
    CompChoice = Math.floor(Math.random() * 3);
    if (CompChoice === 0) {
        return'Rock'
    } else if (CompChoice === 1) {
        return "Paper"
    } else if (CompChoice === 2) {
        return 'Scissor'
    } return CompChoice
}

function getHumanChoice() {
    HumanChoice = prompt('Rock, Paper, or Scissor? ')
    return HumanChoice.charAt(0).toUpperCase() + HumanChoice.slice(1).toLowerCase()
}

function playRound(HumanChoice, CompChoice) {
    if (HumanChoice === CompChoice) {
        return 'draw'
    } else if (HumanChoice === 'Rock' && CompChoice === 'Scissor') {
        return 'human'
    } else if (HumanChoice === 'Scissor' && CompChoice === 'Paper') {
        return 'human'
    } else if (HumanChoice === 'Paper' && CompChoice === 'Rock') {
       return 'human'
    } else {
        return 'computer'
    }
}

function game() {
    let humanscore = 0
    let compscore = 0

    for (let i = 0; i < 5; i++) {

        const HumanChoice = getHumanChoice()
        const CompChoice = getCompChoice()

        let result = playRound(HumanChoice, CompChoice)

        if (result === 'human') humanscore++;
        else if (result === 'computer') compscore++;

        console.log(`Round ${i + 1}:`);
        console.log(`You: ${HumanChoice} | Computer: ${CompChoice}`);
        console.log(`Result: ${result}`);
        console.log(`Score -> You: ${humanscore} | Computer: ${compscore}`);
        console.log('---------------------');

    }

    console.log(`FINAL SCORE: You ${humanscore} - ${compscore} Computer`);
    if (humanscore > compscore) console.log("You win! 🎉");
    else if (compscore > humanscore) console.log("Computer wins! 🤖");
    else console.log("It's a tie! �");

}

game()

