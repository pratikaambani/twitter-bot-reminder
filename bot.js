//Adding Date-Time and twit Dependencies
var
    twit = require('twit'),
    config = require('./config'),
    dateTime = require('node-datetime');

var Twitter = new twit(config);

// Water Reminder Bot, will remind me to drink water every hour
var tweet = function() {
    var date = dateTime.create();
    var formattedDate = date.format('H:M'); //date format: HH:MM
    console.log(formattedDate);

    Twitter.post('statuses/update', {status: formattedDate+', Hey Buddy!! Time to drink Water!!'}, function(error, tweet, response) {
        if (!error) {
            console.log(tweet);
        }
    });
}

tweet();

// re-tweet every 60 minutes
setInterval(tweet, 3600000);
