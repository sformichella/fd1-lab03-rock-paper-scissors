
# Rock, Paper, Scissor Game

Goal: Users selects rock, papers, or scissors and then press submit to play against the computer

### State


* Wins, losses, and draws


How to SHOW the state?
- Display in a STATS section in HTML with some spans


HTML Elements
- State changers
    - Rock, paper, scissors radio buttons
    - Submit button
- State viewers
    - Wins, losses, and draws spans


How/When do we change the state
- Change when user hits submit button
    - What happens on a click?
        - Computer chooses R, P, S
            - random number 0, 1, 2
        - Get the user's input
        - call didUserWin function
        - display on page