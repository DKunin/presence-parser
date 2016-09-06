'use strict';

var PARSE_REGEXP = /\n(?:[0-9]{1,3}\.){3}[0-9]{1,3}(.+)/g;
// var PARSE_REGEXP = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/g;

module.exports = function(presenceFile) {
    return presenceFile
        .match(PARSE_REGEXP)
        .map(singleItem => {
            var si = singleItem.replace(/\s\(.+\)/g, '').split('\t');
            return si[si.length - 1];
        }).reduce((newArray, singleItem) => {
            if (newArray.indexOf(singleItem) !== -1) {
                return newArray;
            }
            return newArray.concat(singleItem);
        }, []);
};
