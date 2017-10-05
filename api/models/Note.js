const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Note', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        students: Sequelize.INTEGER,
        notes: Sequelize.INTEGER,
    }, {
        timestamps: true,
        tableName: 'notes' // Forcer l'utilisation du nom de la table specifier
    });
}
