import { Tweets } from '../api/tweets.js'
import { Template } from 'meteor/templating'

import './tweetform.html'

Template.tweetform.events({
  'submit .tweetform'(evt) {
    evt.preventDefault()
    const title = evt.target.title.value
    const author = evt.target.author.value
    const message = evt.target.message.value
    console.log(title, author, message)
    Tweets.insert({
      title,
      author,
      message
    })

  }
})