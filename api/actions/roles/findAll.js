module.exports = (api) => {
    const User = api.models.Roles;

    return (req, res) => {
        let respond = (roles) => {
            if(users.lenght === 0){
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

        Roles.findAll()
        .then(respond)
        .catch(returnError);
    };
};
