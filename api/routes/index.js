module.exports = (api) => {
    api.use('/auth', require('./auth')(api));
    api.use('/assos', require('./assos')(api));
    api.use('/events', require('./events')(api));
    api.use('/favoris', require('./favoris')(api));
    api.use('/inscrits', require('./inscrits')(api));
    api.use('/notes', require('./notes')(api));
    api.use('/roles', require('./roles')(api));
    api.use('/schools', require('./schools')(api));
    api.use('/sessions', require('./sessions')(api));
    api.use('/types', require('./types')(api));
    api.use('/users', require('./users')(api));
};
