'use strict';

module.exports = function(adresses) {
    var procEnv = process.env;
    return adresses
        .map(singleKey => {
            return Object.keys(procEnv).find(singleEnvKey => procEnv[singleEnvKey] === singleKey);
        })
        .filter(Boolean);
};
