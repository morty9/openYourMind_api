const router = require('express').Router();

module.exports = (api) => {

    /* --------------- GET ------------ */
	// FindAll
    router.get('/',
        api.actions.notes.findAll);


    // FindOne
    router.get('/:id',
        api.actions.notes.findOne);

    /* ------------- POST ----------------*/
    // Create
    router.post('/',
        //api.middlewares.bodyParser.json(),
        // api.middlewares.encryptUserPassword,
        api.actions.notes.create);

    /* -------------- PUT -------------- */
    // Update
    router.put('/:id',
        //api.middlewares.bodyParser.json(),
        // api.middlewares.isConnected,
        // api.middlewares.encryptUserPassword,
        api.actions.notes.update);

    /* ------------ DELETE --------------- */
    // Delete
    router.delete('/:id',
        // api.middlewares.isConnected,
        api.actions.notes.remove);

    return router;
};
