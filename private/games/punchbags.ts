/// <reference path="phaser/phaser.d.ts" />
/// <reference path="lib.ts" />

module PunchBags {
    export var gameName:string = 'punch_bags';

    export function assetLoader(load, base_path) {
        load.image('ring', base_path + 'ring.png');
        load.image('boxer', base_path + 'boxer.png');
        load.image('bag', base_path + 'bag.png');
        //load.audio('music', base_path + 'title.mp3', true);
    }

    export class Play extends SynoPhaser.Play {

        bags: Array<Phaser.Sprite>;
        prompts: Array<Phaser.Text>;
        background: Phaser.Sprite;

        create() {
            this.add.sprite(0, 0, 'ring');

            this.bags = new Array();
            for (var i = 0; i < 3; i++) {
                var bag:Phaser.Sprite = this.add.sprite(200 * i + 100, 0, 'bag');

                bag.inputEnabled = true;
                bag.events.onInputDown.add(this._punch, bag);
                this.bags.push(bag);

                var prompt:Phaser.Text = this.add.text(0, 0, "TEXT", {});
                this.prompts.push(prompt);
            }

            this.add.sprite(200, 300, 'boxer');

            this.beginRound();
        }

        _punch() {
            console.log("TODO");
        }

        beginRound() {
            // TODO: bring down bags
            for (var i = 0; i < 3; i++) {
                this.prompts[i];
            }
        }

        endRound() {
            // TODO: animate out
            this.beginRound();
        }

        endGame() {
        }
    }

    export class MainMenu extends SynoPhaser.MainMenu {
        create() {
            super.create();
            
            // add background
            this.add.sprite(0, 0, 'ring');
            this.add.text(300, 100, "PUNCH OUT", {
                'fill': '#FFFFFF',
                'font-size': 100
            });
        }
    }
}

var game = new SynoPhaser.Game(PunchBags);
