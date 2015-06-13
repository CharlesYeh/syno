Template['challengePlay'].helpers({
});

Template['challengePlay'].events({
});

Template['challengePlay'].created = function() {
    var gameName = this.data;
    var game = new Meteor.SynoBase.Game(Meteor.games[gameName]);
};
