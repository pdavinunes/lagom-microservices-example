const baseURL = require('../services/busesApiConsumer');

module.exports = {    
    getApiVersion(_, res) {
        spVersion = baseURL.defaults.baseURL.split('/')[3];
        res.json({
            sptransVersion: spVersion
        });
    }
};