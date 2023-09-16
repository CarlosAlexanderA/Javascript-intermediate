const table = document.querySelector(".table");
// const box = document.querySelectorAll(".box");
const winnerText = document.getElementById("winner");
const gameBoard = function () {
    this.board = [];
    this.humanPlayer = "X";
    this.botPlayer = "0";
    for (let i = 0; i < 9; i++) {
        const box = document.createElement("button");
        box.id = "box-"+i
        box.className = "box";
        if (i == 2 || i == 5 || i == 8)
            box.classList.add("no-r");
        if (i >= 6)
            box.classList.add("no-b");
        this.board.push(box)
        
        // this.board[i].addEventListener("click", (e) => {
        //     e.target.innerText = `X`;
        // }) 
    }

    this.showBoard = () =>{
        this.board.forEach(item =>{
            table.appendChild(item)
        });
    };

    this.isBoardFilled = (state) =>{
        return state.every(item => item.innerText != "");
    };
    
    this.isPlayerWin = (state, player) =>{
        if (state[0].innerText === player && state[1].innerText === player && state[2].innerText === player) return true;
        if (state[3].innerText === player && state[4].innerText === player && state[5].innerText === player) return true;
        if (state[6].innerText === player && state[7].innerText === player && state[8].innerText === player) return true;
        if (state[0].innerText === player && state[3].innerText === player && state[6].innerText === player) return true;
        if (state[1].innerText === player && state[4].innerText === player && state[7].innerText === player) return true;
        if (state[2].innerText === player && state[5].innerText === player && state[8].innerText === player) return true;
        if (state[0].innerText === player && state[4].innerText === player && state[8].innerText === player) return true;
        if (state[2].innerText === player && state[4].innerText === player && state[6].innerText === player) return true;


        return false;
    };

    this.checkWinner = ()=>{

        if (this.isPlayerWin(this.board, this.humanPlayer)){
            console.log("user");
            winnerText.innerText = ` Player ${this.humanPlayer} wins the game!`;
            return true;
        };
        if (this.isPlayerWin(this.board, this.botPlayer)){
            console.log("bot");

            winnerText.innerText = ` Player ${this.botPlayer} wins the game!`;
            return true;
        };
        if (this.isBoardFilled(this.board)){
            console.log("match draw");

            winnerText.innerText = ` Match Draw!`;
            return true;
        };

        return false;
    };

    this.start = async() =>{
        let human = new HumanPlayer(this.humanPlayer);

        for (let i = 0; i < 9; i++) { 
            this.showBoard();
            const indexHuman =  await human.humanMove(this.board);
            this.board[indexHuman].innerText = this.humanPlayer;
            console.log(this.board);
            if (this.checkWinner()) {
                break;
            }
            // if(i == 5)
            //     break;
        }
    };


};

const HumanPlayer = function (letter){
    this.letter = letter;

    this.humanMove = (state) => {
        return new Promise((resolve) => {
            const clickHandler = (event) => {
                const item = event.target;
                if (item.innerText == "") {
                    item.innerText = "X";
                    const id = parseInt(item.id.slice(-1));
                    console.log(id);
                    state.forEach(item => {
                        item.removeEventListener("click", clickHandler); // Elimina el event listener de todos los elementos
                    });
                    resolve(id);
                }
            };
    
            state.forEach(item => {
                item.addEventListener("click", clickHandler);
            });
        });
    };    
};

const frame = new gameBoard();
// console.log(frame.board)
data = [1,2,3,4,5,6,7,8,9]



const getAlgo = (index)=>{
    return new Promise((resolve, reject) => {
       setTimeout(()=>resolve(data[index]), 2000) 
    });
};

const processArray = async () => {
    for (let i = 0; i < 9; i++) {
        const result = await getAlgo(i);
        console.log(result);
    }
};