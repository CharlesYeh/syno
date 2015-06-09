Meteor.publish('Cards', function () {
  return Cards.find();
});
