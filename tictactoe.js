let box = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".rstbtn");
let newgame = document.querySelector(".newgame");
let msg = document.querySelector(".msg");

let turnO = true;

const winningPattern=
[  
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const rstGame = () =>
{
    for(boxes of box)
    {
        boxes.innerText="";
    }
    turnO=true;
    enableBoxes();
   

}

box.forEach((val)=>
{
    val.addEventListener("click", ()=>
    {
        console.log("this box was clicked")
        if(turnO)
        {
            val.innerText = "O";
            turnO=false;
        }
        else{
            val.innerText="X";
            turnO=true;
        }
        val.disabled = true;
        checkWinner();
    })
}
)

const showWinner = (winner)=>
{
    msg.innerText=`Congratulations!! The winner is ${winner}`;
    newgame.classList.remove("hide");
    msg.classList.remove("hide");
    disableBoxes();
    
}

const disableBoxes = ()=>
{
    for(boxes of box )
    {
        boxes.disabled=true;
    }
}
const enableBoxes = ()=>
    {
        for(boxes of box )
        {
            boxes.disabled=false;
        }
        box.innerText = "";
        newgame.classList.add("hide");
        msg.classList.add("hide");
    }
   

const checkWinner = ()=>
{
    for(let pattern of winningPattern)
    {
        let pattern1 = box[pattern[0]].innerText
        let pattern2 = box[pattern[1]].innerText
        let pattern3 = box[pattern[2]].innerText
        if(pattern1 != "" && pattern2 != "" && pattern3 != "")
        {
            if(pattern1===pattern2&&pattern2===pattern3)
            {
                console.log("winner!!", pattern1);
                showWinner(pattern1);

            }
        }
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(box[pattern[0]],box[pattern[1]],box[pattern[2]]);
    }
    
}

newgame.addEventListener("click", ()=>
{
    rstGame();
})
rstbtn.addEventListener("click", rstGame);

// const windowDown = ()=>
// {
//     window.scrollTo
//     (
//         if
//     )
// }