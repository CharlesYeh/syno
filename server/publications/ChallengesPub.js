Meteor.publish('Challenges', function () {
  return Challenges.find();
});
