Template['challengeItem'].helpers({
  getFriend: function(_id1, _id2) {
    var friendId = (_id1 == Meteor.user()._id) ? _id2 : _id1;
    return Meteor.users.find({ _id: friendId }).fetch()[0];
  },
  deck: function(_id) {
    return Decks.find({ _id: _id }).fetch()[0];
  }
});
