# ------------ Running the app ------------
Install Meteor with:
curl https://install.meteor.com | sh

Run with:
meteor

# ------------ Compiling mini-games ------------
Run the file:
./private/games/kickjs 

It should give the output:
Compiling punchbags...Done
Compiling refugees...Done

The compiled files are placed in /client/games/
Go to this URL to see the game:
http://localhost:3000/games/

# ------------ Database setup ------------
Categorizing games will require adding and pointing Challenges to a new model.

Decks
    name
    description
    createdAt

Cards
    deckId
    primary - english
    secondary - foreign language match
    phonetic (optional)
    image (optional)
    sound (optional)
    createdAt

Challenges
    player1Id
    player2Id
    createdAt

Scores
    challengeId
    playerId
    score
    createdAt

Users
    name
    password
    createdAt
