import random

3# Rock Paper Scissors Game
def gameWin(comp, you):
    # if two values are equal, declare it a tie
    if comp == you:
        return None
    # check for all possibilities where computer chooses Rock
    elif comp == 'r':
        if you == 'p':
            return True
        elif you == 's':
            return False
    # check for all possibilities where computer chooses Paper
    elif comp == 'p':
        if you == 's':
            return True
        elif you == 'r':
            return False
    # check for all possibilities where computer chooses Scissors 
    elif comp == 's':
        if you == 'r':
            return True
        elif you == 'p':
            return False

# Computer's choice
print("Comp Turn: Rock(r) Paper(p) Scissor(s)?")
randNo = random.randint(1, 3)
if randNo == 1:
    comp = 'r'
elif randNo == 2:
    comp = 'p'
else:
    comp = 's'

# Player's choice
you = input("Your Turn: Rock(r) Paper(p) Scissor(s)?")

print(f"Computer chose: {comp}")
print(f"You chose: {you}")

# Game result
a = gameWin(comp, you)
if a == None:
    print("It's a tie!")
elif a:
    print("You win!")
else:
    print("You lose!")