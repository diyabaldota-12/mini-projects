let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let userCount = document.querySelector("#user-score");
let compCount = document.querySelector("#comp-score");


const choice = document.querySelectorAll(".choice");

const getCompChoice=()=>
{
    let arr=["rock", "paper", "scissor"]
    const idx=Math.floor(Math.random()*3);
    return arr[idx];
}

const drawGame = ()=>
{
    console.log("Game was a draw");
    msg.innerText="Game was a draw. Play again";
}

const showWinner =(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {
        console.log("Congratulations!! You won");
        msg.innerText=`Congratulations!! Your ${userChoice} beats ${compChoice} `;
        userScore++;
        userCount.innerText=userScore;
    }
    else{
        console.log("Sorry :(  You lost")
        msg.innerText=`Sorry :(  Your ${userChoice} lost with ${compChoice}`;
        compScore++;
        compCount.innerText=compScore;

    }
}
const playGame = (userChoice)=>
{
    console.log("User choice = ", userChoice);
    const compChoice=getCompChoice();
    console.log("Comp choice = ",compChoice);

    if(userChoice===compChoice)
    {
        drawGame();
        
    }
    else {
        let userWin = true;
        if(userChoice==="rock")
        {
            userWin = compChoice=== "paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin = compChoice=== "scissor"?false:true;
        }
        else{
            userWin = compChoice=== "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
        
    }
   

}
choice.forEach(choices=>
{
    console.log(choices); 
    const userChoice = choices.getAttribute("id")
    choices.addEventListener("click",()=>
    {
        playGame(userChoice);

    })
}
)

