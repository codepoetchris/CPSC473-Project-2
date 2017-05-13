import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.peekAll('message');
    // return Ember.RSVP.hash({
    //   message: this.store.createRecord('message')
    // });
  },
  message: Ember.computed.alias('controller.model.message'),
  actions: {
    // willTransition() {
    //   var sighting = this.get('contoller.model.sighting');
    //   if(sighting.get('hasDirtyAttributes')){
    //     sighting.deleteRecord();
    //   }
    // },
    sendMessage() {
      console.log('sending message: ' + this.get('message'));

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

      // var self = this;

      // this.get('message').save().then(function() {
      //   self.send('flash', {alertType: 'success', message: 'New sighting.'});
      //   self.transitionTo('sightings');
      // });
    },
    cancel() {
      this.get('sighting').deleteRecord();
      this.transitionToRoute('sightings');
    }
  }
});
