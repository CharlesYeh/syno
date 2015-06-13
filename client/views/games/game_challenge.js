Template['gameChallenge'].helpers({
});

Template['gameChallenge'].events({
});

Template['gameChallenge'].created = function() {
    var game = new Meteor.SynoBase.Game(Meteor.PunchBags);
};
