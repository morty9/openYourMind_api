module.exports = (api) => {
    api.actions = {
        assos: require('./Assos')(api),
        notes: require('./notes')(api),
        users: require('./users')(api),
        school: require('./school')(api),
        recap: require('./recap')(api),
        // auth: require('./auth')(api),
        roles: require('./roles')(api)
    };
};
