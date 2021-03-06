/// <reference path="lib/meteor.d.ts" />
/// <reference path="lib/phaser.d.ts" />

module SynoBase {
    export var TIMER_COUNT:number = 3;

    export class Game extends Phaser.Game {
        public static GAME_BASE_PATH:string = '/images/games/';

        public gameName:string;
        public assetLoader:Function;
        public challenge:any;
        public player:any;

        /**
         * Play - class representing play state of game
         * assetLoader - function that loads assets during the preloader
         */
        constructor(game:SynoGame, challenge, player) {
            super(800, 600, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', game.MainMenu, false);
            this.state.add('Play', game.Play, false);

            this.state.start('Boot', true, false);

            this.gameName = game.gameName;
            this.assetLoader = game.assetLoader;
            this.challenge = challenge;
            this.player = player;
        }
    }
    export interface SynoGame {
        gameName:string;

        assetLoader:Function;
        MainMenu:any;
        Play:any;
    }
    export class Play extends Phaser.State {
        gameTime:number;
        score:number;

        textTimer:Phaser.Text;
        textScore:Phaser.Text;

        initGame() {
            var styleText = {};
            this.textTimer = this.game.add.text(0, 0, "Time:", styleText);
            this.textScore = this.game.add.text(0, 100, "Time:", styleText);

            // start timer
            this.time.events.repeat(Phaser.Timer.SECOND, TIMER_COUNT, this.updateTimer, this);

            this.gameTime = TIMER_COUNT + 1;
            this.updateTimer();
            this.setScore(0);
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

        fetchCard():Card {
            // return a random card for now
            var subGame = <SynoBase.Game>this.game;
            //var cards = Cards.find({ deckId: subGame.challenge.deckId }).fetch();
            var cards = Cards.find({ }).fetch();
            return cards[Math.floor(Math.random() * cards.length)];
        }

        fetchCardSet(num:number):Array<Card> {
            var pickedIndexes = {};
            var picked = [];

            // randomly pick <num>
            var cards = Cards.find({ }).fetch();
            for (var i = 0; i < num; i++) {
                var rand = Math.floor(Math.random() * (cards.length - i));
                for (var j = 0; j <= rand; j++) {
                    if (pickedIndexes[j]) {
                        rand++;
                    }
                }

                pickedIndexes[rand] = true;
                picked.push(cards[rand]);
            }
            return picked;
        }

        sendScore(score:number) {
            var subGame = <SynoBase.Game>this.game;
            Scores.insert({
                challengeId: subGame.challenge._id,
                playerId: subGame.player._id,
                score: score,
                createdAt: new Date()
            });
        }

        endGame() {
            // should be overridden!
            console.log("base.ts: endGame function not overridden");
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

            var subGame = <SynoBase.Game>this.game;
            subGame.assetLoader(this.game.load, Game.GAME_BASE_PATH + subGame.gameName + '/');
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
        create() {
            //this.input.onDown.addOnce(this.fadeOut, this);
            this.input.onDown.addOnce(this.leaveMenu, this);
        }
        fadeOut() {
            //tween.onComplete.add(this.leaveMenu, this);
        }
        leaveMenu() {
            this.game.state.start('Play', true, false);
        }
    }
    export class Card {
        primary:string;
        secondary:string;
        phonetic:string;
    }
}
Meteor.SynoBase = SynoBase;

function registerGame(game:SynoBase.SynoGame) {
    if (Meteor.games == undefined) {
        Meteor.games = {};
    }
    Meteor.games[game.gameName] = game;
}
