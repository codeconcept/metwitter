import './body.html'
import './tweetform.js'
import './tweet.js'

import { Tweets } from '../api/tweets.js';

Template.body.helpers({
  tweets() {
    return Tweets.find({})
  }
})

