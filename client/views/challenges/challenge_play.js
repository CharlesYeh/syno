Template['challengePlay'].helpers({
});

Template['challengePlay'].events({
});

Template['challengePlay'].created = function() {
    var gameName = this.data.gameName;
    var game = new Meteor.SynoBase.Game(Meteor.games[gameName], this.data, Meteor.user());
};
