/*
 *  Allow to create an association
 * @Return Assos
 */
module.exports = (api) => {
    const Assos = api.models.Asso;

    return (req, res) => {
        let isCreate = (assos) => {
            if (assos) {
                res.status(201).send(assos);
            }
            else {
                res.status(409).send({
                    ErrorCode: 409,
                    message: 'Assos already existing'
                })
            }
        }

        Assos
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
