'use strict';

const PARSE_REGEXP = /\n(?:[0-9]{1,3}\.){3}[0-9]{1,3}(.+)/g;

module.exports = function(presenceFile) {
    return presenceFile
        .match(PARSE_REGEXP)
        .map(singleItem => {
            const si = singleItem.replace(/\s\(.+\)/g, '').split('\t');
            return si[si.length - 1];
        }).reduce((newArray, singleItem) => {
            if (newArray.indexOf(singleItem) !== -1) {
                return newArray;
            }
            return newArray.concat(singleItem);
        }, []);
};
