module.exports = (api) => {
    const Roles = api.models.Roles;

    return (req, res) => {
        let respond = (result) => {
            res.sendStatus(201);
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Roles.update(req.body,
            { where: { id: req.params.id } 
        }).then(respond)
        .catch(returnError);
    };
};
