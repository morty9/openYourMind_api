const router = require('express').Router();

module.exports = (api) => {

    /* --------------- GET ------------ */
	// FindAll
    router.get('/',
        api.actions.types.findAll);


    // FindOne
    router.get('/:id',
        api.actions.types.findOne);

    /* ------------- POST ----------------*/
    // Create
    router.post('/',
        api.middlewares.bodyParser.json(),
        // api.middlewares.encryptUserPassword,
        api.actions.types.create);

    /* -------------- PUT -------------- */
    // Update
    router.put('/:id',
        api.middlewares.bodyParser.json(),
        // api.middlewares.isConnected,
        // api.middlewares.encryptUserPassword,
        api.actions.types.update);

    /* ------------ DELETE --------------- */
    // Delete
    router.delete('/:id',
        // api.middlewares.isConnected,
        api.actions.types.remove);

    return router;
};
