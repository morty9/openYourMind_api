module.exports = (api) => {
    api.actions = {
        assos: require('./assos')(api),
        events: require('./events')(api),
        favoris: require('./favoris')(api),
        inscrits: require('./inscrits')(api),
        notes: require('./notes')(api),
        roles: require('./roles')(api),
        schools: require('./schools')(api),
        sessions: require('./sessions')(api),
        types: require('./types')(api),
        users: require('./users')(api),
        auth: require('./auth')(api),
    };
};
