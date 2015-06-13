/// <reference path="lib/meteor.d.ts" />
/// <reference path="lib/phaser.d.ts" />
/// <reference path="base.ts" />

module Template {
    export var gameName:string = 'template';

    export function assetLoader(load, base_path) {
        load.image('titlepage', base_path + 'background.jpg');
        //load.audio('music', base_path + 'title.mp3', true);
    }

    export class Play extends Phaser.State {

        background:Phaser.Image;
        prompts:Array<Phaser.Text>;

        create() {
            this.background = this.game.add.image(0, 0, 'titlepage');

            this.prompts = new Array();
            this.prompts.push(this.game.add.text(0, 0, "", {}));
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
            this.input.onDown.add(this.fire);
            this.beginRound();
        }

        fire() {
            this.input.x;
            this.input.y;
            // shoot laser
            // show explosion
            
            // if last asteroid, or wrong asteroid
            // update score
            if (true) {
                // reset wave
                this.beginRound();
            }
        }

        beginRound() {
            
            // clear existing asteroids
            // create new asteroids, set vel
        }

        endGame() {
            // delete everything
            // send score
        }
    }

    export class MainMenu extends SynoBase.MainMenu {
        create() {
            super.create();
        }
    }
}

registerGame(Template);
