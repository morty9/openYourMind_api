const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Asso', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_school: Sequelize.INTEGER,
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        id_user: Sequelize.INTEGER,
        id_type: Sequelize.INTEGER,
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        tableName: 'assos' // Forcer l'utilisation du nom de la table specifier
    });
}
