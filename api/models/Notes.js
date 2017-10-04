const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Note', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_student: Sequelize.INTEGER,
        note: Sequelize.STRING,
    }, {
        timestamps: true,
        tableName: 'note' // Forcer l'utilisation du nom de la table specifier
    });
}
