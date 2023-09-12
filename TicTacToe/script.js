const table = document.querySelector(".table");
const box = document.querySelectorAll(".box");
const gameBoard = () =>{
    const board = document.querySelectorAll(".box");
    let isPlayerOne = true;
    board.forEach(item =>{
        console.log(item)
        item.addEventListener("click", (e)=>{
            e.target.innerText = `${isPlayerOne ? "X" : "0"}`;
            isPlayerOne = !isPlayerOne
        });
    });

    

    const getInput = (item) =>{
        board.forEach((btn)=>{
            if (btn.id == item) {
                console.log(btn)
                btn.textContent = "0"
            }
        });
    };

    return {board, getInput};
};

let frame = gameBoard();
