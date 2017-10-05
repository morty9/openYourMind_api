const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Asso', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        schools: Sequelize.INTEGER,
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        president: Sequelize.INTEGER,
        members: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
        notes: Sequelize.INTEGER
    }, {
        timestamps: true,
        tableName: 'assos' // Forcer l'utilisation du nom de la table specifier
    });
}
