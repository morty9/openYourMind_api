module.exports = (api) => {
    // api.use('/auth', require('./auth')(api));
    api.use('/users', require('./users')(api));
    api.use('/note', require('./note')(api));
    api.use('/recap', require('./recap')(api));
    api.use('/school', require('./school')(api));
    api.use('/assos', require('./assos')(api));
};
