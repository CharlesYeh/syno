Meteor.publish('Users', function () {
  return Users.find();
});
