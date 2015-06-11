Scores = new Mongo.Collection('Scores');

Scores.attachSchema(
    new SimpleSchema({
    challengeId: {
      type: String
    },
    playerId: {
      type: String
    },
    score: {
      type: Number
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
  Scores.allow({
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
