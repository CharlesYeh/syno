Meteor.publish('Scores', function () {
  return Scores.find();
});
