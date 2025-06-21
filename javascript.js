let humanScore=0;
let rounds=0;

let outputElement=document.querySelector(".output");
let headerElement=document.querySelector(".header");
let choicesElement=document.createElement("div");
choicesElement.classList.add("choices");
let resElement=document.createElement("div");
resElement.classList.add("result");
let scoreElement=document.createElement("div");
scoreElement.classList.add("score");
let btns=document.querySelectorAll("button");
let bodyElement=document.querySelector("body");

function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    switch(choice){
        case 0: return "rock"; break;
        case 1: return "paper"; break;
        case 2: return "scissor"; break;
    }
}

function playGame(humanChoice, computerChoice){
    let result;
    choicesElement.textContent = `You chose:${humanChoice}\nComputer chose:${computerChoice}`;
    outputElement.appendChild(choicesElement);
    if (computerChoice===humanChoice){
        result="draw";
    }
    else if ((computerChoice==="rock" && humanChoice==="scissor") || (computerChoice==="paper" && humanChoice==="rock") ||
    (computerChoice==="scissor" && humanChoice==="paper")){
        result="computer";
    }
    else if ((humanChoice==="rock" && computerChoice==="scissor") || (humanChoice==="paper" && computerChoice==="rock") ||
    (humanChoice==="scissor" && computerChoice==="paper")){
        result="human";
    }
    output(result)
}

function output(result){
    switch(result){
        case "draw":
            resElement.textContent=`Draw`;
            break;
        case "computer":
            resElement.textContent=`Computer wins`;
            break;
        case "human":
            resElement.textContent=`You win!`;
            humanScore++;
            break;
    }
    scoreElement.textContent=`Score: ${humanScore}`;
    headerElement.appendChild(scoreElement);
    outputElement.appendChild(resElement);
}

function endGame(){
    headerElement.remove();
    btns.forEach(btn=>btn.remove());
    outputElement.remove();

    let endGameBody=document.createElement("div");
    endGameBody.classList.add("endGameBody");
    bodyElement.appendChild(endGameBody);

    let endGameElement=document.createElement("div");
    endGameElement.textContent="Game Over";

    let endGameScore=document.createElement("div");
    endGameScore.textContent=`Score: ${humanScore}`;
    
    endGameBody.appendChild(endGameElement);
    endGameBody.appendChild(endGameScore);
}

btns.forEach(button =>{
    button.addEventListener("click", (e) =>{
        let computerChoice=getComputerChoice();
        const humanChoice=e.target.id;
        playGame(humanChoice, computerChoice);
        if (humanScore>=5){
            endGame();
        }
    })
})


