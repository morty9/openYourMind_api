/*
 *  Allow to create a recap
 * @Return Recap
 */
module.exports = (api) => {
    const Recap = api.models.Recap;

    return (req, res) => {
        let isCreate = (recap) => {
            if (recap) {
                res.status(201).send(recap);
            }
            else {
                res.status(409).send({
                    ErrorCode: 409,
                    message: 'Recap already existing'
                })
            }
        }

        Recap
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
