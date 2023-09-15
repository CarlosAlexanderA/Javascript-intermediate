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
        return state.filter(item => item.innerText != "");
    };
    
    this.isPlayerWin = (state, player) =>{
        if (state[3].innerText == state[4].innerText == state[5].innerText == player) return true;
        if (state[0].innerText == state[1].innerText == state[2].innerText == player) return true;
        if (state[6].innerText == state[7].innerText == state[8].innerText == player) return true;
        if (state[0].innerText == state[3].innerText == state[6].innerText == player) return true;
        if (state[1].innerText == state[4].innerText == state[7].innerText == player) return true;
        if (state[2].innerText == state[5].innerText == state[8].innerText == player) return true;
        if (state[0].innerText == state[4].innerText == state[8].innerText == player) return true;
        if (state[2].innerText == state[4].innerText == state[8].innerText == player) return true;

        return false;
    };

    this.checkWinner = ()=>{

        if (this.isPlayerWin(this.board, this.humanPlayer)){
            winnerText.innerText = ` Player ${this.humanPlayer} wins the game!`;
            return true;
        };
        if (this.isPlayerWin(this.board, this.botPlayer)){
            winnerText.innerText = ` Player ${this.botPlayer} wins the game!`;
            return true;
        };
        if (this.isBoardFilled(this.board)){
            winnerText.innerText = ` Match Draw!`;
            return true;
        };

        return false;
    };

    this.start = () =>{
        let human = new this.humanPlayer(this.humanPlayer);

        while (true) {
            self.showBoard();

            let square = human.humanMove(self.board);
            self.board[square] = self.humanPlayer;
            if (self.checkWinner())
                break;
        };
    };


};

const HumanPlayer = function (letter){
    this.letter = letter;

    this.humanMove = (state) =>{
        let idItem;
        state.forEach(item =>{
            if (item.innerText == "")
                item.addEventListener("click", () => {
                    idItem = item.id;
                }); 
        });
        return idItem
    };
};

const frame = new gameBoard();
// console.log(frame.board)