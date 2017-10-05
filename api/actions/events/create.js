/*
 *  Allow to create an event
 * @Return Event
 */
module.exports = (api) => {
    const Evenement = api.models.Evenement;

    return (req, res) => {
        let isCreate = (evenement) => {
            if (evenement) {
                res.status(201).send(evenement);
            }
            else {
                res.status(409).send({
                    ErrorCode: 409,
                    message: 'evenement already existing'
                })
            }
        }

        Evenement
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
