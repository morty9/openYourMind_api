/*
 *  Allow to create a session
 * @Return Session
 */
module.exports = (api) => {
    const Session = api.models.Session;

    return (req, res) => {
        let isCreate = (assos) => {
            if (assos) {
                res.status(201).send(assos);
            }
            else {
                res.status(409).send({
                    ErrorCode: 409,
                    message: 'Session already existing'
                })
            }
        }

        Session
            .build(req.body)
            .save()
            .then(isCreate)
            .catch(error);

        function error(err) {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        }
    };
};
