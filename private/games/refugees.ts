/// <reference path="lib/meteor.d.ts" />
/// <reference path="lib/phaser.d.ts" />
/// <reference path="base.ts" />

module Refugees {
    export var gameName:string = 'refugees';

    export function assetLoader(load, base_path) {
        load.image('starfield', base_path + 'starfield.png');
        load.image('earth', base_path + 'earth.png');
        load.image('explosion0000', base_path + 'explosion0000.png');
        load.image('explosion0001', base_path + 'explosion0001.png');
        load.image('explosion0002', base_path + 'explosion0002.png');
        load.image('explosion0003', base_path + 'explosion0003.png');
        load.image('explosion0004', base_path + 'explosion0004.png');
        load.image('rocket', base_path + 'rocket.png');
        load.image('shuttle', base_path + 'shuttle.png');
        //load.audio('music', base_path + 'title.mp3', true);
    }

    export class Play extends SynoBase.Play {

        background:Phaser.Sprite;

        create() {
            // add background
            this.add.sprite(0, 0, 'starfield');
            // create satellite, earth, asteroids
            this.add.sprite(58, 200, 'earth');
            this.add.sprite(316, 264, 'rocket');
            this.add.sprite(535, 238, 'shuttle');
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
            
            // background
            this.add.sprite(0, 0, 'starfield');
            this.add.text(300, 100, "Hologrammed Rocket Destroyer", {
                'fill': '#FFFFFF',
                'font-size': 200
            });
        }
    }
}

registerGame(Refugees);
