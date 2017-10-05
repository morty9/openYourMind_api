const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Session', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_asso: Sequelize.INTEGER,
        description: Sequelize.STRING,
        date: Sequelize.STRING,
        salle: Sequelize.STRING
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        tableName: 'session' // Forcer l'utilisation du nom de la table specifier
    });
}
