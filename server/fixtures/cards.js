Meteor.startup(function() {
  function addDeck(deckId, faces) {
    var now = new Date();
    for (var i in faces) {
      var face = faces[i];
      face.deckId = deckId;
      face.createdAt = createdAt;
      Cards.insert( face );
    }
  }

  if (Cards.find().count() === 0) {
    Decks.insert({
      name: 'Basic Chinese',
      description: 'Beginning Chinese words yo.',
      createdAt: new Date()
    }, function(err, docInserted) {
      addDeck(docInserted, [
        { primary: 'car', secondary: '車', },
        { primary: 'pen', secondary: '筆', },
        { primary: 'book', secondary: '書', },
        { primary: 'game', secondary: '遊戲', },
        { primary: 'phone', secondary: '電話', },
        { primary: 'eat', secondary: '吃', },
        { primary: 'drink', secondary: '喝', },
      ]);
    });

    Decks.insert({
      name: 'Advanced Chinese',
      description: 'Harder Chinese food words yo.',
      createdAt: new Date()
    }, function(err, docInserted) {
      addDeck(docInserted, [
        { primary: 'lemon', secondary: '檸檬', },
        { primary: 'grapes', secondary: '葡萄', },
        { primary: 'steamed pork bun', secondary: '擦燒包', },
        { primary: 'shumai', secondary: '燒賣', },
        { primary: 'steamed bun', secondary: '饅頭', },
        { primary: 'oil stick', secondary: '油條', },
        { primary: 'rice wrap', secondary: '腸粉', },
        { primary: 'pork ribs', secondary: '排骨', },
        { primary: 'radish cake', secondary: '蘿蔔糕', },
        { primary: 'taro', secondary: '芋頭', },
        { primary: 'egg custard', secondary: '蛋搭', },
        { primary: 'steamed dumpling', secondary: '蒸餃', },
      ]);
    });
  }
});
