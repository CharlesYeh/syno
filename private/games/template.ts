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
        answers:Array<Phaser.Text>;
        prompt:Phaser.Text;

        create() {
            this.background = this.game.add.image(0, 0, 'titlepage');

            var scaleSize = 800 / this.background.width;
            this.background.scale = new Phaser.Point(scaleSize, scaleSize);

            this.answers = new Array();
            for (var i = 0; i < 3; i++) {
                this.answers.push(this.game.add.text(100 * i + 100, 100, "" + i, {
                    fill: '#ffffff'
                }));
            }

            this.prompt = this.game.add.text(300, 500, "Prompt", {
                fill: '#ffffff'
            });

            // add background
            // create satellite, earth, asteroids
            // create explosions

            // count down
            this.time.events.add(Phaser.Timer.SECOND * 3, this.startGame, this);
        }

        startGame() {
            // count down
            // start timer
            // on timeout...
            
            // add inputs
            this.beginRound();
        }

        beginRound() {
            var correct = Math.floor(Math.random() * this.answers.length);
            for (var i in this.answers) {
                var txt = this.answers[i];

                var card:SynoBase.Card = this.fetchCard();
                txt.text = card.primary;

                if (correct == i) {
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
