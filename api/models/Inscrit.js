const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Inscrit', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_user: Sequelize.INTEGER,
        id_session: Sequelize.INTEGER,
        id_event: Sequelize.INTEGER,
        status: Sequelize.BOOLEAN
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        tableName: 'inscrit' // Forcer l'utilisation du nom de la table specifier
    });
}
