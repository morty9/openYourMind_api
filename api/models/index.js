const Sequelize = require('sequelize');

module.exports = (api) => {
    api.sequelize =  new Sequelize(
        api.settings.db.sql.database,
        api.settings.db.sql.dbUser,
        api.settings.db.sql.dbUserPassword,
        api.settings.db.sql.sequelizeParamSetting
    );

    let asso = require('./Asso')(api);
    let evenement = require('./Event')(api);
    let favoris = require('./Favoris')(api);
    let inscrit = require('./Inscrit')(api);
    let note = require('./Note')(api);
    let role = require('./Role')(api);
    let school = require('./School')(api);
    let session = require('./Session')(api);
    let type = require('./Type')(api);
    let user = require('./User')(api);
    // let authToken = require('./AuthToken')(api);

    api.models = {
        Asso: asso,
        Evenement: evenement,
        Favoris: favoris,
        Inscrit: inscrit,
        Note: note,
        Role: role,
        School: school,
        Session: session,
        Type: type,
        User: user,
        // AuthToken: authToken
    };
};
