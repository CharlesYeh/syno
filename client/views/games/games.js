Template['games'].helpers({
});

Template['games'].events({
});

Template['games'].created = function() {
    var game = new Meteor.SynoBase.Game(Meteor.PunchBags);
};
