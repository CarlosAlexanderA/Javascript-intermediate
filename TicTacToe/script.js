//#region Script anterior
const table = document.querySelector(".table");
// const box = document.querySelectorAll(".box");
const winnerText = document.getElementById("winner");

//#endregion
const gameBoard = function(){
    this.origBoard = [];
    this.huPlayer = "X";
    this.aiPlayer = "0";
    
    this.showBoard = () =>{
        // table.removeChild();
        let delBox = Array.from(table.children);
        winnerText.innerText = "";
        delBox.forEach(box =>{
            table.removeChild(box);
        });
        this.origBoard = Array.from(Array(9).keys());
        for (let i = 0; i < 9; i++) {
            const box = document.createElement("button");
            box.id = i
            box.className = "box";
            if (i == 2 || i == 5 || i == 8)
                box.classList.add("no-r");
            if (i >= 6)
                box.classList.add("no-b");
            box.addEventListener("click", this.turnClick, false);
            table.appendChild(box);
        }

    };

    this.turnClick = (square) =>{
        console.log(typeof this.origBoard[square.target.id]);
        if (typeof this.origBoard[square.target.id] == "number") {
            this.turn(square.target.id, this.huPlayer);
            if (!this.isPlayerWin(this.origBoard, this.huPlayer) && !this.chekTie()) this.turn(this.bestSpot(), this.aiPlayer);
        }
    };

    this.turn = (squareId, player) =>{
        this.origBoard[squareId] = player;
        document.getElementById(squareId).innerText = player;
        if (this.isPlayerWin(this.origBoard, player)) this.gameOver(player)
    };

    this.chekTie = () =>{
        if (this.actions().length == 0) {
            let delBox = Array.from(table.children);
            delBox.forEach(box =>{
                box.removeEventListener("click", this.turnClick);
            });

            this.declareWinner("Tie Game")
        }
        return this.actions().every(item => item.innerText == "number");
    };
    this.actions = () =>{
        return this.origBoard.filter(s => typeof s == 'number');
    };

    this.isPlayerWin = (state, player) =>{
        if (state[0] === player && state[1] === player && state[2] === player) return true;
        if (state[3] === player && state[4] === player && state[5] === player) return true;
        if (state[6] === player && state[7] === player && state[8] === player) return true;
        if (state[0] === player && state[3] === player && state[6] === player) return true;
        if (state[1] === player && state[4] === player && state[7] === player) return true;
        if (state[2] === player && state[5] === player && state[8] === player) return true;
        if (state[0] === player && state[4] === player && state[8] === player) return true;
        if (state[2] === player && state[4] === player && state[6] === player) return true;


        return false;
    };
    this.gameOver = (player) =>{
        const arrayBoxs = Array.from(table.children);
        arrayBoxs.forEach(box =>{
            box.removeEventListener("click", this.turnClick)
        });

        this.declareWinner(`Winner is a ${player === "X" ? "Player" : "Bot IA"}`)
    };

    this.declareWinner = who =>{
        winnerText.innerText = `${who}`;
    };

    this.bestSpot = () =>{
        return this.minimax(this.origBoard, this.aiPlayer).index;
    };

    this.minimax = (newBoard, player) =>{
        let availSpots = this.actions();
        if (this.isPlayerWin(newBoard, this.huPlayer))
            return {score : -10};
        else if (this.isPlayerWin(newBoard, this.aiPlayer))
            return {score : 10};
        else if (availSpots.length == 0)
            return {score : 0};

        let moves = [];

        availSpots.forEach(elem => {
            let move = {};
            move.index = newBoard[elem];
            newBoard[elem] = player;

            if (player == this.aiPlayer) {
                let result = this.minimax(newBoard, this.huPlayer);
                move.score = result.score;
            } else{
                let result = this.minimax(newBoard, this.aiPlayer);
                move.score = result.score;
            }

            newBoard[elem] = move.index;

            moves.push(move);
        });

        let bestMove;

        if (player === this.aiPlayer) {
            let bestScore = -10000;

            moves.forEach((elem, index) =>{
                if (elem.score > bestScore) {
                    bestScore = elem.score;
                    bestMove = index;
                }
            });
        } else{
            let bestScore = 10000;

            moves.forEach((elem, index) =>{
                if (elem.score < bestScore) {
                    bestScore = elem.score;
                    bestMove = index;
                }
            });
        }

        return moves[bestMove];

    };

};

const boardPlay = new gameBoard();

boardPlay.showBoard();
