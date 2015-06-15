/// <reference path="lib/meteor.d.ts" />
/// <reference path="lib/phaser.d.ts" />
/// <reference path="base.ts" />

module Template {
    export var gameName:string = 'template';
    export var TIMER_COUNT:number = 3;

    export function assetLoader(load, base_path) {
        load.image('titlepage', base_path + 'background.jpg');
        //load.audio('music', base_path + 'title.mp3', true);
    }

    export class Play extends SynoBase.Play {

        background:Phaser.Image;

        correct:number;
        prompt:Phaser.Text;
        answers:Array<Phaser.Text>;

        gameTime:number;
        score:number;

        textTimer:Phaser.Text;
        textScore:Phaser.Text;

        create() {
            this.background = this.game.add.image(0, 0, 'titlepage');

            var scaleSize = 800 / this.background.width;
            this.background.scale = new Phaser.Point(scaleSize, scaleSize);

            var styleText = {
                fill: '#ffffff'
            };

            this.answers = new Array();
            for (var i = 0; i < 3; i++) {
                this.answers.push(this.game.add.text(100 * i + 200, 200, "" + i, styleText));
            }

            this.prompt = this.game.add.text(300, 500, "Prompt", styleText);

            this.textTimer = this.game.add.text(0, 0, "Time:", styleText);
            this.textScore = this.game.add.text(0, 100, "Time:", styleText);

            // add background
            // create satellite, earth, asteroids
            // create explosions

            // count down
            //this.time.events.add(Phaser.Timer.SECOND * 3, this.startGame, this);
            this.initGame();
        }

        initGame() {
            // start timer
            this.time.events.repeat(Phaser.Timer.SECOND, TIMER_COUNT, this.updateTimer, this);

            this.gameTime = TIMER_COUNT + 1;
            this.updateTimer();
            this.setScore(0);
            
            // add inputs
            for (var i in this.answers) {
                var ans = this.answers[i];
                ans.inputEnabled = true;

                var binding = ans.events.onInputDown.add(this.pickAnswer, this);
                binding.params = [ans];
            }
            this.beginRound();
        }

        pickAnswer(answer) {
            var index = this.answers.indexOf(answer);
            if (index == this.correct) {
                this.setScore(this.score + 1);
            }
            this.beginRound();
        }
        setScore(score) {
            this.score = score;
            this.textScore.text = "Score: " + this.score;
        }

        updateTimer() {
            this.gameTime--;
            this.textTimer.text = "Time: " + this.gameTime.toString();

            if (this.gameTime <= 0) {
                this.endGame();
            }
        }

        beginRound() {
            this.correct = Math.floor(Math.random() * this.answers.length);
            var cards:Array<SynoBase.Card> = this.fetchCardSet(3);
            for (var i in this.answers) {
                var txt = this.answers[i];
                var card = cards[i];

                txt.text = card.primary;

                if (this.correct == i) {
                    this.prompt.text = card.secondary;
                }
            }
        }

        endGame() {
            // delete everything
            // send score
        }
    }

    export class MainMenu extends SynoBase.MainMenu {
        background:Phaser.Image;

        create() {
            super.create();
            this.background = this.game.add.image(0, 0, 'titlepage');
            this.game.add.text(100, 200, "Click to start the game!", {
                fill: '#ffffff'
            });

            var scaleSize = 800 / this.background.width;
            this.background.scale = new Phaser.Point(scaleSize, scaleSize);
        }
    }
}

registerGame(Template);
