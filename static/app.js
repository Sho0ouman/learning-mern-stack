'use strict';

var contentNode = document.getElementById('app');
var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
var message = continents.map(function (c) {
  return 'Hello ' + c + '! \n';
}).join(' ');
var component = React.createElement(
  'p',
  null,
  message
);
ReactDOM.render(component, contentNode);
