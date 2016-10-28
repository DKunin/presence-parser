'use strict';

module.exports = adresses => {
    const procEnv = process.env;
    return adresses
        .map(singleKey => {
            return Object.keys(procEnv).find(singleEnvKey => procEnv[singleEnvKey] === singleKey);
        })
        .filter(Boolean);
};
