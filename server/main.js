//
//  Copyright (C) 2016-2018  dvTrend, Inc - All Rights Reserved
//
//  author: Wendong
//

var app = require('express')();
var httpServer = require('http').Server(app);
var path = require('path');
var ip = require('ip');
var cors = require('cors')

const httpport    = process.env.PORT || 12321;

app.use(cors())
app.use(require('express').static(path.join('../public')));

// Just for testing, will remove in product
app.get('/test', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from server!"}');
});


app.get('*', function(req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Do you want a index.html?"}');
});

httpServer.listen(httpport, function() {
    console.log('listening on ' + ip.address() + ":" + httpport);
});


