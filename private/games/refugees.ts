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

        prompt:Phaser.Text;
        shuttles:Array<Phaser.Group>;
        shuttleInputs:Array<Phaser.Text>;

        correct:number;

        create() {
            // add background
            this.add.sprite(0, 0, 'starfield');
            // create satellite, earth, asteroids
            this.add.sprite(58, 200, 'earth');
            this.prompt = this.add.text(50, 200, "", {});
            this.add.sprite(316, 264, 'rocket');
            for (var i = 0; i < 4; i++) {
                var shuttle = this.add.group();
                var shuttleInput = this.add.text(0, 0, "A", {})
                var shuttleSprite = this.add.sprite(535, 238, 'shuttle')
                shuttle.add(shuttleSprite);
                shuttle.add(shuttleInput);

                this.shuttles.push(shuttle);
                this.shuttleInputs.push(shuttleInput);

                // add inputs
                shuttleSprite.inputEnabled = true;
                var binding = shuttleSprite.events.onInputDown.add(this.fire, this);
                binding.params = [shuttle];
            }
            // create explosions
            this.startGame();
        }

        startGame() {
            // count down
            // start timer
            // on timeout...
            
            this.beginRound();
        }

        fire(shuttle) {
            var index = this.shuttles.indexOf(shuttle);
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
            this.correct = Math.floor(Math.random() * this.shuttles.length);
            var cards:Array<SynoBase.Card> = this.fetchCardSet(4);
            for (var i in this.shuttleInputs) {
                this.shuttleInputs[i].text = cards[i].primary;
                if (this.correct == i) {
                    this.prompt.text = cards[i].secondary;
                }
            }
        }

        placeShuttle(shuttle:Phaser.Sprite) {
            // TODO: pick degree instead of position
            shuttle.x = Math.floor(Math.random() * 800);
            shuttle.y = (Math.random() < .5) ? -100 : 700;
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
