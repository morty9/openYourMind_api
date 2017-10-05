module.exports = (api) => {
    const Role = api.models.Role;

    return (req, res) => {
        let isCreate = (roles) => {
            if (roles) {
                res.status(201).send(roles);
            }
            else {
                res.status(409).send({
                    ErrorCode: 409,
                    message: 'Role already existing'
                })
            }
        }

        Role
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
