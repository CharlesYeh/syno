Template['challengeItem'].helpers({
  deck: function(_id) {
    return Decks.find({ _id: _id }).fetch()[0];
  }
});
