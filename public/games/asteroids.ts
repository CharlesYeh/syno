/// <reference path="../../bower_components/phaser/typescript/phaser.d.ts" />
/// <reference path="lib.ts" />

module Asteroids {
    export function preload(load, base_path) {
        load.image('titlepage', base_path + 'titlepage.jpg');
        load.audio('music', base_path + 'title.mp3', true);
    }

    export class MainMenu extends SynoPhaser.MainMenu {
    }

    export class Play extends Phaser.State {

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
            this.sendWave();
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
                this.sendWave();
            }
        }

        sendWave() {
            // clear existing asteroids
            // create new asteroids, set vel
        }

        endGame() {
            // delete everything
            // send score
        }
    }
}

var game = new SynoPhaser.Game(Asteroids);
var game = new SynoPhaser.Game(PunchBags);
