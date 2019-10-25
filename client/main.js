import { Template } from 'meteor/templating';
import "../node_modules/bootstrap/scss/bootstrap.scss"
// import 'bootstrap/dist/js/bootstrap.bundle';

import './main.html';
import { Tweets } from './../imports/api/tweets.js';

Template.body.helpers({
  tweets() {
    return Tweets.find({})
  }
})

Template.tweetform.events({
  'submit .tweetform'(evt) {
    evt.preventDefault()
    console.log(evt)
  }
})