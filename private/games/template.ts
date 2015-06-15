/// <reference path="lib/meteor.d.ts" />
/// <reference path="lib/phaser.d.ts" />
/// <reference path="base.ts" />

module Template {
    export var gameName:string = 'template';

    export function assetLoader(load, base_path) {
        load.image('titlepage', base_path + 'background.jpg');
        //load.audio('music', base_path + 'title.mp3', true);
    }

    export class Play extends SynoBase.Play {

        background:Phaser.Image;

        correct:number;
        prompt:Phaser.Text;
        answers:Array<Phaser.Text>;

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

            // add background
            // create satellite, earth, asteroids
            // create explosions

            // count down
            //this.time.events.add(Phaser.Timer.SECOND * 3, this.startGame, this);
            this.beginIntro();
        }

        beginIntro() {
            var tween = this.game.add.tween(this.answers[0]);
            tween.to({ y: this.answers[0].y + 50 }, 2000, "Linear", true);
            tween.onComplete.add(this.initGame, this);
        }

        initGame() {
            super.initGame();

            this.textTimer.fill = '#ffffff';
            this.textScore.fill = '#ffffff';

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
