


class TicTacToe:
    def _init_(self):
        self.board = [' ' for _ in range(9)] # we weill use a single list to rep a 3x3 sqare
        self.current_winner = None # to keep track ogf winner


    def print_board(self):
        for row in [self.board[i*3:(i+1)*3] for i in range(3)]:
            print('| ' + '| '.join(row) + ' |')

    @staticmethod
    def print_board_nums():
        # 0 |1 | 2 etc tells us what number
        number_board = [[str(i) for i in range(j*3, (j+1)*3)] for j in range(3)]
        for row in number_board:
            print('| ' + '| '.join(row) + ' |')




    def available_moves(self):


        moves = []

        for (i, spot) in enumerate(self.board):
            if spot == ' '
