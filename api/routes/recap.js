const router = require('express').Router();

module.exports = (api) => {

    /* --------------- GET ------------ */
	// FindAll
    router.get('/',
        api.actions.recap.findAll);


    // FindOne
    router.get('/:id',
        api.actions.recap.findOne);

    /* ------------- POST ----------------*/
    // Create
    router.post('/',
        //api.middlewares.bodyParser.json(),
        // api.middlewares.encryptUserPassword,
        api.actions.recap.create);

    /* -------------- PUT -------------- */
    // Update
    router.put('/:id',
        //api.middlewares.bodyParser.json(),
        // api.middlewares.isConnected,
        // api.middlewares.encryptUserPassword,
        api.actions.recap.update);

    /* ------------ DELETE --------------- */
    // Delete
    router.delete('/:id',
        // api.middlewares.isConnected,
        api.actions.recap.remove);

    return router;
};
