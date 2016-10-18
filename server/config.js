/* ************************************************************************** */

/**
 * Server config for Phil and Steph wedding website project
 * Author: Phil Gibbins
 */

/* DEPENDENCIES */

// node framework
var express = require('express');

// sets up environment variables
require('dotenv').config()

/* ************************************************************************** */

/* APP SETUP */

var app = express();
app.use( express.static(__dirname + "/../dist/") );

// News details
app.get('/data/news', function(req, res) {
    res.sendFile(__dirname + '/data/news.json');
});

// People details
app.get('/data/people', function(req, res) {
    res.sendFile(__dirname + '/data/people.json');
});

/* ************************************************************************** */

/* SERVER */

var server = app.listen(process.env.APP_UI_PORT, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Wedding website app listening @ http://%s:%s", host, port);

});

/* ************************************************************************** */