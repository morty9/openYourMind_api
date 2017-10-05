const Sequelize = require('sequelize');

module.exports = (api) => {
    api.sequelize =  new Sequelize(
        api.settings.db.sql.database,
        api.settings.db.sql.dbUser,
        api.settings.db.sql.dbUserPassword,
        api.settings.db.sql.sequelizeParamSetting
    );

    let user = require('./User')(api);
    let asso = require('./Asso')(api);
    let note = require('./Note')(api);
    let recap = require('./Recap')(api);
    let role = require('./Role')(api);
    let school = require('./School')(api);
    // let authToken = require('./AuthToken')(api);

    api.models = {
        User: user,
        Asso: asso,
        Note: note,
        Recap : recap,
        Role : role,
        School: school,
        // AuthToken: authToken
    };
};
