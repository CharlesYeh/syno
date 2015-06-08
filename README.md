#------------ Running the app ------------
Install Meteor with:
curl https://install.meteor.com | sh

Run with:
meteor
#------------ Compiling mini-games ------------
Run the file:
./private/games/kickjs 

It should give the (correct) output:
Compiling punchbags...lib.ts(96,1): error TS2304: Cannot find name 'Meteor'.
punchbags.ts(74,1): error TS2304: Cannot find name 'Meteor'.
Done
Compiling refugees...lib.ts(96,1): error TS2304: Cannot find name 'Meteor'.
refugees.ts(67,1): error TS2304: Cannot find name 'Meteor'.
Done

Go to this URL to see the game:
http://localhost:3000/games/
