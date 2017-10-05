const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Note', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_inscrit: Sequelize.INTEGER,
        id_session: Sequelize.INTEGER,
        description: Sequelize.STRING
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        tableName: 'note' // Forcer l'utilisation du nom de la table specifier
    });
}
