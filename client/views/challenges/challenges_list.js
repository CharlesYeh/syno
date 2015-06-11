Template['challengesList'].helpers({
  challenges: function() {
    return Challenges.find();
  }
});

Template['challengesList'].events({
});
