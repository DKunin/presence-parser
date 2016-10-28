'use strict';

const parser = require('./parser');
const keyMapper = require('./key-mapper');
const fs = require('fs');
const execa = require('execa');

execa
    .shell(`ssh deploy@${process.env.CITADEL_IP} "cat ~/presence/presence-data.md"`)
    .then(result => {
        console.log(result);
        console.log(keyMapper(parser(result.stdout)));
    });
