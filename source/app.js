var React = require('react'); 
var ReactDOM = require('react-dom'); 

var Application = require('./components/Application.react');
var WebAPIUtils = require('./utils/WebAPIUtils');

WebAPIUtils.initializeStreamOfTweets();
console.log("I've received a new tweet and now will dispatch it together with a new action. Look at me, I'm so smart");
// ReactDOM.render(<Application />, document.getElementById('react-application'));
