/*
 *  Allow to create a school
 * @Return School
 */
module.exports = (api) => {
    const School = api.models.School;

    return (req, res) => {
        let isCreate = (school) => {
            if (school) {
                res.status(201).send(school);
            }
            else {
                res.status(409).send({
                    ErrorCode: 409,
                    message: 'School already existing'
                })
            }
        }

        School
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
