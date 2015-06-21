Template.registerHelper('debug', function (optionalValue) {
  if (typeof console !== "undefined" || typeof console.log !== "undefined") {
    console.log("Current Context");
    console.log("====================");
    console.log(this);
    if (optionalValue) {
      console.log("Value");
      console.log("====================");
      console.log(optionalValue);
    }

    return '';
  }

  // For IE8
  alert(this);

  if (optionalValue) {
    alert(optionalValue);
  }

  return '';
});

Template.registerHelper('constant', function (what) {
  return Meteor.App[what.toUpperCase()];
});

Template.registerHelper("getFriend", function(_id1, _id2) {
  var friendId = (_id1 == Meteor.user()._id) ? _id2 : _id1;
  return Meteor.users.find({ _id: friendId }).fetch()[0];
});

Template.registerHelper("prettifyDate", function(dateString) {
  return dateString.toLocaleString();
});
