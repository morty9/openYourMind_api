module.exports = (api) => {
    const Roles = api.models.Role;

    return (req, res) => {
        let respond = (roles) => {
            if(!roles){
                res.status(404).send({
                    ErrorCode: 404,
                    Message: "Roles not found"
                });
            } else {
                res.status(200).send(roles);
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Roles.findById(req.params.id)
        .then(respond)
        .catch(returnError);
    };
};
