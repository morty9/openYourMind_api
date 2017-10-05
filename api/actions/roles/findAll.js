module.exports = (api) => {
    const Role = api.models.Role;

    return (req, res) => {
        let respond = (roles) => {
            if(roles.lenght === 0){
                res.status(204).send(roles);
            } else {
                res.status(200).send(roles);
            }
        };

        let returnError = (err) => {
            res.status(500).send({ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Role.findAll()
        .then(respond)
        .catch(returnError);
    };
};
