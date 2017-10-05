const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Recap', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        //assos: Sequelize.ARRAY(Sequelize.INTEGER),
        assos: Sequelize.INTEGER,
        //listInscris: Sequelize.ARRAY(Sequelize.INTEGER),
        listInscris: Sequelize.INTEGER,
    }, {
        timestamps: true,
        tableName: 'recap' // Forcer l'utilisation du nom de la table specifier
    });
}
