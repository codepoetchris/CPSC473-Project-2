import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('game');
  this.route('games', function() {
    this.route('new');
    this.route('join');
  });
  this.route('login');
});

export default Router;
