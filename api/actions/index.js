module.exports = (api) => {
    api.actions = {
        assos: require('./assos')(api),
        notes: require('./notes')(api),
        users: require('./users')(api),
        schools: require('./schools')(api),
        recaps: require('./recaps')(api),
        // auth: require('./auth')(api),
        roles: require('./roles')(api)
    };
};
