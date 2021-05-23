import math
import random



class Player:
    def _init_(self, letter):
        # letter is x or o
        self.letter = letter

    # now we want all players to get their next turn
    def  get_move(self, game):
        pass

class RandomComputerPlayer(Player):
    def _init_(self,letter):
        super()._init_(letter)

    def get_move(self,game):
        pass

class HumanPlayer(Player):
    def _init_(self,letter):
        super()._init_(letter)

    def get_move(self, game):
        pass
