var AppDispatcher = require('../dispatcher/AppDispatcher');

function receiveTweet(tweet) {
  console.log("I've received a new tweet and now will dispatch it together with a new action. Look at me, I'm so smart");
  var action = {
    type: 'receive_tweet',
    tweet: tweet
  };
  AppDispatcher.dispatch(action);
}

module.exports = {
  receiveTweet: receiveTweet
};