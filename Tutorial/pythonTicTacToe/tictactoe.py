import random
import math
import os

class TicTacToe:

    def __init__(self):
        self.board = ["-" for _ in range(9)]
        if random.randint(0, 1) == 1:
            self.humanPlayer = "X"
            self.botPlayer = "0"
        else:
            self.humanPlayer = "0"
            self.botPlayer = "X"

    def show_board(self):
        print("")
        for i in range(3):
            print(" ", self.board[0+(i*3)], " | ", self.board[1+(i*3)], " | ", self.board[2+(i*3)])
            print("")

    def is_board_filled(self, state):
        return not "-" in state

    def is_player_win(self, state, player):
        if state[0] == state[1] == state[2] == player: return True
        if state[3] == state[4] == state[5] == player: return True
        if state[6] == state[7] == state[8] == player: return True
        if state[0] == state[3] == state[6] == player: return True
        if state[1] == state[4] == state[7] == player: return True
        if state[2] == state[5] == state[8] == player: return True
        if state[0] == state[4] == state[8] == player: return True
        if state[2] == state[4] == state[8] == player: return True

        return False
    
    def check_winner(self):

        if self.is_player_win(self.board, self.humanPlayer):
            os.system("clear")
            print(f"    Player {self.humanPlayer} wins the game! ")
            return True
        
        if self.is_player_win(self.board, self.botPlayer):
            os.system("clear")
            print(f"    Player {self.botPlayer} wins the game! ")
            return True
        
        if self.is_board_filled(self.board):
            os.system("clear")
            print("     Match Draw!     ")
            return True
        
        return False
    
    def start(self):
        human = HumanPlayer(self.humanPlayer)
        bot = ComputerPlayer(self.botPlayer)

        while True:
            os.system("clear")
            print(f"     Player {self.humanPlayer} turn")
            self.show_board()

            square = human.human_move(self.board)
            self.board[square] = self.humanPlayer
            if(self.check_winner()):
                break
            
            square = bot.machine_move(self.board)
            self.board[square] = self.botPlayer
            if(self.check_winner()):
                break


class HumanPlayer:
    
    def __init__(self, letter):
        self.letter = letter

    def human_move(self, state):
        while True:
            square = int(input("Enter the squere fix spot(1-9): "))
            print(square)
            if state[square-1] == "-":
                break
        return square - 1 

class ComputerPlayer(TicTacToe):

    def __init__(self, letter):
        self.botPlayer = letter
        self.humanPlayer = "X" if letter == "0" else "0"
    
    def players(self, state):
        n = len(state)
        x = 0
        o = 0
        for i in range(9):
            if(state[i] == "X"):
                x += 1
            if(state[i] == "0"):
                o += 1
        
        if(self.humanPlayer == "X"):
            return "X" if x == o else "0"
        if(self.humanPlayer == "0"):
            return "0" if x == o else "X"
    
    def actions(self, state):
        return [i for i, x in enumerate(state) if x == "-"]

    def result(self, state, action):
        newState = state.copy()
        player = self.players(state)
        newState[action] = player
        return newState
    
    def terminal(self, state):
        if(self.is_player_win(state, "X")):
            return True
        if(self.is_player_win(state, "0")):
            return True
        
        return False
    
    def minimax(self, state, player):
        max_player = self.humanPlayer
        other_player = "0" if player == "X" else "X"

        if self.terminal(state):
            return {"position": None, "score": 1 * (len(self.actions(state)) + 1) if other_player == max_player else
            -1 * (len(self.actions(state)) + 1)}
        elif self.is_board_filled(state):
            return {"position": None, "score": 0}
        
        if player == max_player:
            best = {"position" : None, "score" : -math.inf}
        else:
            best = {"position" : None, "score" : math.inf}

        for posible_move in self.actions(state):
            newState = self.result(state, posible_move)
            sim_score = self.minimax(newState, other_player)

            sim_score["position"] = posible_move

            if player == max_player:
                if sim_score["score"] > best["score"]:
                    best = sim_score
            else:
                if sim_score["score"] < best["score"]:
                    best = sim_score
        
        return best
    
    def machine_move(self, state):
        square = self.minimax(state, self.botPlayer)["position"]
        return square


        


        

             





tictactoe = TicTacToe()

tictactoe.start()
 