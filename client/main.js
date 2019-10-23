import { Template } from 'meteor/templating';
import "../node_modules/bootstrap/scss/bootstrap.scss"
// import 'bootstrap/dist/js/bootstrap.bundle';

import './main.html';

Template.body.helpers({
  tweets: [
    {
      _id: 1,
      author: 'Sam',
      title: 'First tweet',
      message: 'Can you see me?',
      creationDate: new Date().toISOString()
    },
    {
      _id: 2,
      author: 'Bob',
      title: 'Meteor',
      message: 'Meteor is great :)',
      creationDate: new Date().toISOString()
    }
  ]
})
