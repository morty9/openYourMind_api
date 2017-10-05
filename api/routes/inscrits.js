const router = require('express').Router();

module.exports = (api) => {

    /* --------------- GET ------------ */
	// FindAll
    router.get('/',
        api.actions.inscrits.findAll);


    // FindOne
    router.get('/:id',
        api.actions.inscrits.findOne);

    /* ------------- POST ----------------*/
    // Create
    router.post('/',
        api.middlewares.bodyParser.json(),
        // api.middlewares.encryptUserPassword,
        api.actions.inscrits.create);

    /* -------------- PUT -------------- */
    // Update
    router.put('/:id',
        api.middlewares.bodyParser.json(),
        // api.middlewares.isConnected,
        // api.middlewares.encryptUserPassword,
        api.actions.inscrits.update);

    /* ------------ DELETE --------------- */
    // Delete
    router.delete('/:id',
        // api.middlewares.isConnected,
        api.actions.inscrits.remove);

    return router;
};
