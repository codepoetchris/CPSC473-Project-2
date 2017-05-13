import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.push({
      data: [{
        id: 1,
        type: 'message',
        attributes: {
          email: 'codepoetchris@gmail.com',
          message: 'Is websockets finally working?'
        },
        relationships: {}
      }, {
        id: 2,
        type: 'message',
        attributes: {
          email: 'anonymous@gmail.com',
          message: 'Sure is!'
        },
        relationships: {}
      }]
    });
  }
});
