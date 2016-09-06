'use strict';

var parser = require('./parser');
var keyMapper = require('./key-mapper');
var fs = require('fs');
var execa = require('execa');

execa.shell(`ssh deploy@${process.env.CITADEL_IP} "cat ~/presence/presence-data.md"`).then(result => {
    // console.log(result.stdout);
    // console.log(keyMapper(parser(fs.readFileSync('./presence-data.md').toString())))
    console.log(keyMapper(parser(result.stdout)));
});
