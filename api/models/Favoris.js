const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Favoris', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_user: Sequelize.INTEGER,
        id_asso: Sequelize.INTEGER
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        tableName: 'favoris' // Forcer l'utilisation du nom de la table specifier
    });
}
