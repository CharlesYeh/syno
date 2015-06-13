Template['challengePage'].helpers({
  player: function(id) {
    return Meteor.users.find({ _id: id }).fetch()[0];
  },
  deck: function(id) {
    return Decks.find({ _id: id }).fetch()[0];
  }
});
