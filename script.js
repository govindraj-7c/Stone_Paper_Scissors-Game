const choices = document.querySelectorAll(".content");
const msg = document.querySelector("#msg");
const userScoreId = document.querySelector("#user");
const compScoreId = document.querySelector("#comp");
let userScore = 0;
let compScore = 0;

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const playGame = (userChoice)=>{
    const compChoice = systemChoice();
    
    if(userChoice === compChoice){ //Game Draw
        gameDraw();
    }

    else{  //not draw
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

const systemChoice = ()=>{
    const choiceArr = ["stone", "paper", "scissor"];
    const num = Math.floor(Math.random()*3);
    return choiceArr[num];
}

const gameDraw = ()=>{
    msg.innerText = "Game Draw ! Play Again.";
    msg.style.backgroundColor = "#274690";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerText = `You Win ! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScoreId.innerText = userScore;
    }
    else{
        compScore++;
        msg.innerText = `You Lose ! Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScoreId.innerText = compScore;
    }
}