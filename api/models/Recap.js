const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Recap', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_asso: Sequelize.ARRAY(Sequelize.INTEGER),
        list: Sequelize.ARRAY(Sequelize.INTEGER),
    }, {
        timestamps: true,
        tableName: 'recap' // Forcer l'utilisation du nom de la table specifier
    });
}
