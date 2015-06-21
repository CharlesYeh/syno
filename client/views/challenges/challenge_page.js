Template['challengePage'].helpers({
  deck: function(id) {
    var deck = Decks.find({ _id: id }).fetch()[0];
    deck.cards = Cards.find({ deckId: id }).fetch();
    return deck;
  }
});
