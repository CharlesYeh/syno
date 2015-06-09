if (Cards.find().count() === 0) {
  Cards.insert([{
    primary: 'car',
    secondary: '車',
    createdAt: new Date()
  }, {
    primary: 'pen',
    secondary: '筆',
    createdAt: new Date()
  }, {
    primary: 'book',
    secondary: '書',
    createdAt: new Date()
  }, {
    primary: 'game',
    secondary: '遊戲',
    createdAt: new Date()
  }, {
    primary: 'phone',
    secondary: '電話',
    createdAt: new Date()
  }]);
}
