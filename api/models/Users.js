const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Assos', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        email: Sequelize.STRING,
        School: Sequelize.STRING,
	registered_list: Sequelize.STRING
    }, {
        timestamps: true,
        tableName: 'students' // Forcer l'utilisation du nom de la table specifier
    });
}
