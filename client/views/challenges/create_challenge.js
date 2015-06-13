Meteor.subscribe('Decks');
Template['createChallenge'].helpers({
  'friends': function() {
    // TODO: get only friends
    return Meteor.users.find();
  },
  'decks': function() {
    // TODO: get only friends
    return Decks.find();
  }
});
Template['createChallenge'].events({
  'submit form': function(e) {
    e.preventDefault();

    var challenge = {
      player1Id: Meteor.user()._id,
      player2Id: $(e.target).find('[name=friend]').val(),
      deckId: $(e.target).find('[name=deck]').val(),
      createdAt: new Date()
    };
    challenge._id = Challenges.insert(challenge);
    Router.go('challengePage', challenge);
  }
});
