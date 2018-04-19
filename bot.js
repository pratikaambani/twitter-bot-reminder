//Adding Date-Time and twit Dependencies
var
    twit = require('twit'),
    config = require('./config'),
    moment = require('moment-timezone');

var Twitter = new twit(config);

// Water Reminder Bot, will remind me to drink water every hour
var tweet = function() {
    var date = moment().tz("Asia/Kolkata");
    console.log(date);

    Twitter.post('statuses/update', {status: date+' | Hey Buddy!!\nTime to drink Water!!'}, function(error, tweet) {
        if (!error) {
            console.log(tweet);
        }
    });
}

tweet();

// re-tweet every 60 minutes
setInterval(tweet, 1000);
