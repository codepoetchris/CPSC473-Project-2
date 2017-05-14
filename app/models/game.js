import DS from 'ember-data';

export default DS.Model.extend({
  gameId: DS.attr('number'),
  name: DS.attr('string'),
  players: DS.hasMany('player')
});
