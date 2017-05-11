export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'websocket',
  initialize: function(container, app) {
    app.inject('controller', 'websockets', 'service:websockets');
  }
};
