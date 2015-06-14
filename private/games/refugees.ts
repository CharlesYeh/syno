/// <reference path="lib/meteor.d.ts" />
/// <reference path="lib/phaser.d.ts" />
/// <reference path="base.ts" />

module Refugees {
    export var gameName:string = 'refugees';

    export function assetLoader(load, base_path) {
        load.image('titlepage', base_path + 'titlepage.jpg');
        load.audio('music', base_path + 'title.mp3', true);
    }

    export class Play extends SynoBase.Play {

        background:Phaser.Sprite;

        create() {
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

registerGame(Refugees);
