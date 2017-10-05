const router = require('express').Router();

module.exports = (api) => {

    /* --------------- GET ------------ */
	// FindAll
    router.get('/',
        api.actions.sessions.findAll);


    // FindOne
    router.get('/:id',
        api.actions.sessions.findOne);

    /* ------------- POST ----------------*/
    // Create
    router.post('/',
        api.middlewares.bodyParser.json(),
        // api.middlewares.encryptUserPassword,
        api.actions.sessions.create);

    /* -------------- PUT -------------- */
    // Update
    router.put('/:id',
        api.middlewares.bodyParser.json(),
        // api.middlewares.isConnected,
        // api.middlewares.encryptUserPassword,
        api.actions.sessions.update);

    /* ------------ DELETE --------------- */
    // Delete
    router.delete('/:id',
        // api.middlewares.isConnected,
        api.actions.sessions.remove);

    return router;
};
