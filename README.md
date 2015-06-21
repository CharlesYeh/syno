# ------------ Running the app ------------
Install Meteor with:
curl https://install.meteor.com | sh

Run with:
meteor

# ------------ Compiling mini-games ------------
Install typescript:
npm install -g typescript

Run this file to compile the games:
./private/games/kickjs 

You can optionally give it a game name to only compile that game:
./private/games/kickjs refugees 

It should give the output:
Compiling punchbags...Done
Compiling refugees...Done

The compiled files are placed in /client/games/

Go to this URL to see a game, 
http://localhost:3000/games/{name}
where {name} is game name like one of the following:
template, punchbags, refugees, foosball

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
