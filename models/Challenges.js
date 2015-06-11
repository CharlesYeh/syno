Challenges = new Mongo.Collection('Challenges');

Challenges.attachSchema(
    new SimpleSchema({
    player1Id: {
      type: String
    },
    player2Id: {
      type: String
    },
    deckId: {
      type: String
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
  Challenges.allow({
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
