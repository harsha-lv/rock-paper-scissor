let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    switch(choice){
        case 0: return "rock"; break;
        case 1: return "paper"; break;
        case 2: return "scissor"; break;
    }
}

function getHumanChoice(){
    let choice;
    let btns=document.querySelectorAll("button");
    btns.forEach(button =>{
        button.addEventListener("click", (e) => {
            switch(e.target.id){
                case "rock": choice="rock"; break;
                case "paper": choice="paper"; break;
                case "scissor": choice="scissor"; break;
            }
        })
    })
    return choice;
}

function playGame(){
    for (let i=0;i<5;i++){
        let computerChoice=getComputerChoice();
        let humanChoice=getHumanChoice();
        if (computerChoice===humanChoice){
            console.log(`Computer chose: ${computerChoice}`);
            console.log("Draw");
        }
        else if ((computerChoice==="rock" && humanChoice==="scissor") || (computerChoice==="paper" && humanChoice==="rock") ||
        (computerChoice==="scissor" && humanChoice==="paper")){
            console.log(`Computer chose: ${computerChoice}`);
            console.log("You lost");
            computerScore++;
        }
        else if ((humanChoice==="rock" && computerChoice==="scissor") || (humanChoice==="paper" && computerChoice==="rock") ||
        (humanChoice==="scissor" && computerChoice==="paper")){
            console.log(`Computer chose: ${computerChoice}`);
            console.log("You won!");
            humanScore++;
        }
    }

    console.log(`Final score: ${humanScore}/5`);
}

playGame();

