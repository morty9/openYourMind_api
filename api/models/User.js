const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        lastname: Sequelize.STRING,
        firstname: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        classUser: Sequelize.STRING,
        id_role: Sequelize.INTEGER,
        id_school: Sequelize.INTEGER
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        tableName: 'user' // Forcer l'utilisation du nom de la table specifier
    });
}
