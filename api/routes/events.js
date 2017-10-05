const router = require('express').Router();

module.exports = (api) => {

    /* --------------- GET ------------ */
	// FindAll
    router.get('/',
        api.actions.events.findAll);


    // FindOne
    router.get('/:id',
        api.actions.events.findOne);

    /* ------------- POST ----------------*/
    // Create
    router.post('/',
        api.middlewares.bodyParser.json(),
        // api.middlewares.encryptUserPassword,
        api.actions.events.create);

    /* -------------- PUT -------------- */
    // Update
    router.put('/:id',
        api.middlewares.bodyParser.json(),
        // api.middlewares.isConnected,
        // api.middlewares.encryptUserPassword,
        api.actions.events.update);

    /* ------------ DELETE --------------- */
    // Delete
    router.delete('/:id',
        // api.middlewares.isConnected,
        api.actions.events.remove);

    return router;
};
