/// <reference path="../../bower_components/phaser/typescript/phaser.d.ts" />

module SynoPhaser {
    export class Game extends Phaser.Game {

        public static GAME_BASE_PATH:string = 'assets/games/punchbags/';
        public assetLoader:Function;

        /**
         * Play - class representing play state of game
         * assetLoader - function that loads assets during the preloader
         */
        constructor(game:SynoGame) {
            super(800, 600, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', game.MainMenu, false);
            this.state.add('Play', game.Play, false);

            this.state.start('Boot', true, false);
            this.assetLoader = game.assetLoader;
        }
    }
    export interface SynoGame {
        assetLoader:Function;
        MainMenu: any;
        Play: any;
    }
    export class Play extends Phaser.State {
        create() {
            // setup timer
        }

        fetchCard() {
            // return a random card for now
        }
    }
    export class Boot extends Phaser.State {
        preload() {
            this.load.image('preloadBar', Game.GAME_BASE_PATH + 'loader.png');
        }
        create() {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop) {
            }

            this.game.state.start('Preloader');
        }
    }
    export class Preloader extends Phaser.State {

        preloadBar:Phaser.Sprite;

        preload() {
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            (<SynoPhaser.Game>this.game).assetLoader(this.game.load, Game.GAME_BASE_PATH);
        }
        create() {
            // fade out preloader
            var tween = this.add.tween(this.preloadBar)
                .to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }
        startMainMenu() {
            this.game.state.start('MainMenu', true, false);
        }
    }
    export class MainMenu extends Phaser.State {
        background: Phaser.Sprite;
        logo: Phaser.Sprite;

        create() {
            //this.input.onDown.addOnce(this.fadeOut, this);
            this.input.onDown.addOnce(this.startGame, this);
        }
        fadeOut() {
            //tween.onComplete.add(this.startGame, this);
        }
        startGame() {
            this.game.state.start('Play', true, false);
        }
    }
    export class Card {
        primary:string;
        secondary:string;
        phonetic:string;
    }
}