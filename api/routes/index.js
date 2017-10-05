module.exports = (api) => {
    // api.use('/auth', require('./auth')(api));
    api.use('/users', require('./users')(api));
    api.use('/notes', require('./notes')(api));
    api.use('/recaps', require('./recaps')(api));
    api.use('/schools', require('./schools')(api));
    api.use('/assos', require('./assos')(api));
    api.use('/roles', require('./roles')(api));
};
