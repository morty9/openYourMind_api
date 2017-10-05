/*
 *  Allow to create a type
 * @Return Type
 */
module.exports = (api) => {
    const Type = api.models.Type;

    return (req, res) => {
        let isCreate = (type) => {
            if (type) {
                res.status(201).send(type);
            }
            else {
                res.status(409).send({
                    ErrorCode: 409,
                    message: 'Type already existing'
                })
            }
        }

        Type
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
