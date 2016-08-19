var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react')

var Collection = React.createClass({
  createHtmlMarkupStringOfTweetList: function () {
    var htmlString = ReactDOMServer.renderToStaticMarkup (
      <TweetList tweet={this.props.tweet} />
    );

    var htmlMarkup = {
      html: htmlString
    };

    return JSON.stringify(htmlMarkup);
  },

  getListOfTweetIds: function () {
    return Object.keys(this.props.tweets);
  },

  getNumberOfTweetsInCollection: function () {
    return this.getListOfTweetIds().length;
  },

  render: function () {
    var getNumberOfTweetsInCollection = this.getNumberOfTweetsInCollection();
    if (getNumberOfTweetsInCollection > 0) {
      var tweets = this.props.tweets;
      var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
      var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
      var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection
    }

    return (
      // html here from page 88 top of page
    )
  }
})