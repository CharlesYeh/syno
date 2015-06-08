/// <reference path="phaser/phaser.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SynoBase;
(function (SynoBase) {
    var Game = (function (_super) {
        __extends(Game, _super);
        /**
         * Play - class representing play state of game
         * assetLoader - function that loads assets during the preloader
         */
        function Game(game) {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);
            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', game.MainMenu, false);
            this.state.add('Play', game.Play, false);
            this.state.start('Boot', true, false);
            this.gameName = game.gameName;
            this.assetLoader = game.assetLoader;
        }
        Game.GAME_BASE_PATH = '/images/games/';
        return Game;
    })(Phaser.Game);
    SynoBase.Game = Game;
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.apply(this, arguments);
        }
        Play.prototype.create = function () {
            // setup timer
        };
        Play.prototype.fetchCard = function () {
            // return a random card for now
        };
        return Play;
    })(Phaser.State);
    SynoBase.Play = Play;
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', Game.GAME_BASE_PATH + 'loader.png');
        };
        Boot.prototype.create = function () {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
            }
            this.game.state.start('Preloader');
        };
        return Boot;
    })(Phaser.State);
    SynoBase.Boot = Boot;
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            var subGame = this.game;
            subGame.assetLoader(this.game.load, Game.GAME_BASE_PATH + subGame.gameName + '/');
        };
        Preloader.prototype.create = function () {
            // fade out preloader
            var tween = this.add.tween(this.preloadBar)
                .to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };
        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    })(Phaser.State);
    SynoBase.Preloader = Preloader;
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.create = function () {
            //this.input.onDown.addOnce(this.fadeOut, this);
            this.input.onDown.addOnce(this.startGame, this);
        };
        MainMenu.prototype.fadeOut = function () {
            //tween.onComplete.add(this.startGame, this);
        };
        MainMenu.prototype.startGame = function () {
            this.game.state.start('Play', true, false);
        };
        return MainMenu;
    })(Phaser.State);
    SynoBase.MainMenu = MainMenu;
    var Card = (function () {
        function Card() {
        }
        return Card;
    })();
    SynoBase.Card = Card;
})(SynoBase || (SynoBase = {}));
Meteor.SynoBase = SynoBase;
/// <reference path="phaser/phaser.d.ts" />
/// <reference path="lib.ts" />
var Refugees;
(function (Refugees) {
    Refugees.gameName = 'refugees';
    function assetLoader(load, base_path) {
        load.image('titlepage', base_path + 'titlepage.jpg');
        load.audio('music', base_path + 'title.mp3', true);
    }
    Refugees.assetLoader = assetLoader;
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.apply(this, arguments);
        }
        Play.prototype.create = function () {
            // add background
            // create satellite, earth, asteroids
            // create explosions
            // count down
            this.time.events.add(Phaser.Timer.SECOND * 3, this.startGame, this);
        };
        Play.prototype.startGame = function () {
            // count down
            // start timer
            // on timeout...
            // add inputs
            this.input.onDown.add(this.fire);
            this.beginRound();
        };
        Play.prototype.fire = function () {
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
        };
        Play.prototype.beginRound = function () {
            // clear existing asteroids
            // create new asteroids, set vel
        };
        Play.prototype.endGame = function () {
            // delete everything
            // send score
        };
        return Play;
    })(Phaser.State);
    Refugees.Play = Play;
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.create = function () {
            _super.prototype.create.call(this);
        };
        return MainMenu;
    })(SynoBase.MainMenu);
    Refugees.MainMenu = MainMenu;
})(Refugees || (Refugees = {}));
Meteor.Refugees = Refugees;
