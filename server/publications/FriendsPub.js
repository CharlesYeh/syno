Meteor.publish('Friends', function () {
  return Friends.find();
});
