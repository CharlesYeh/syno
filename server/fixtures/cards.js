Meteor.startup(function() {
  if (Cards.find().count() === 0) {
    Decks.insert({
      name: 'Basic Chinese',
      description: 'Beginning Chinese words yo.',
      createdAt: new Date()
    }, function(err, docInserted) {
      Cards.insert({
        deckId: docInserted,
        primary: 'car',
        secondary: '車',
        createdAt: new Date()
      });
      Cards.insert({
        deckId: docInserted,
        primary: 'pen',
        secondary: '筆',
        createdAt: new Date()
      });
      Cards.insert({
        deckId: docInserted,
        primary: 'book',
        secondary: '書',
        createdAt: new Date()
      });
      Cards.insert({
        deckId: docInserted,
        primary: 'game',
        secondary: '遊戲',
        createdAt: new Date()
      });
      Cards.insert({
        deckId: docInserted,
        primary: 'phone',
        secondary: '電話',
        createdAt: new Date()
      });
    });
  }
});
