let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let newgamebtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg= document.querySelector("#msg")


let turnO = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
const resetGame=()=>{
    turnO = true;
    enabledboxes();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O"
            box.style.color ="red"
            turnO = false;
        } else {
            box.innerText = "X"
            box.style.color ="blue"
            turnO = true
        }
        box.disabled = true
        checkWinner()
        
    })


})

for(let box of boxes){
    box.addEventListener("click", function(dets){
        console.log(dets)

    })
}













const disabledboxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabledboxes =()=>{
    for(let box of boxes){
        box.enabled = true;
        box.innerText =""
    }
}

const showWinner =(winner)=>{
    msg.innerText = `Congratulations Winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disabledboxes();
}

const checkWinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText


        if(pos1val !="" && pos2val != "" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                
                showWinner(pos1val);
            }
        }



    }
}

newgamebtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)