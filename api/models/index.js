const Sequelize = require('sequelize');

module.exports = (api) => {
    api.sequelize =  new Sequelize(
        api.settings.db.sql.database,
        api.settings.db.sql.dbUser,
        api.settings.db.sql.dbUserPassword,
        api.settings.db.sql.sequelizeParamSetting
    );

    let user = require('./Users')(api);
    let assos = require('./Assos')(api);
    let notes = require('./Notes')(api);
    let recap = require('./Recap')(api);
    let roles = require('./Roles')(api);
    let schools = require('./Schools')(api);
    // let authToken = require('./AuthToken')(api);

    api.models = {
        User: user,
        Assos: assos,
        Notes: notes,
        Recap : recap,
        Roles : roles,
        Schools: schools,
        // AuthToken: authToken
    };
};
