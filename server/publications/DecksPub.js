Meteor.publish('Decks', function () {
  return Decks.find();
});
