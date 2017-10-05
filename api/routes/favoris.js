const router = require('express').Router();

module.exports = (api) => {

    /* --------------- GET ------------ */
	// FindAll
    router.get('/',
        api.actions.favoris.findAll);


    // FindOne
    router.get('/:id',
        api.actions.favoris.findOne);

    /* ------------- POST ----------------*/
    // Create
    router.post('/',
        api.middlewares.bodyParser.json(),
        // api.middlewares.encryptUserPassword,
        api.actions.favoris.create);

    /* -------------- PUT -------------- */
    // Update
    router.put('/:id',
        api.middlewares.bodyParser.json(),
        // api.middlewares.isConnected,
        // api.middlewares.encryptUserPassword,
        api.actions.favoris.update);

    /* ------------ DELETE --------------- */
    // Delete
    router.delete('/:id',
        // api.middlewares.isConnected,
        api.actions.favoris.remove);

    return router;
};
