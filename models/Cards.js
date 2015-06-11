Cards = new Mongo.Collection('Cards');

Cards.attachSchema(
    new SimpleSchema({
    deckId: {
      type: String
    },
    primary: {
      type: String
    },
    secondary: {
      type: String
    },
    phonetic: {
      type: String,
      optional: true
    },
    image: {
      type: String,
      optional: true
    },
    sound: {
      type: String,
      optional: true
    },
    createdAt: {
      type: Date,
      denyUpdate: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Cards.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
