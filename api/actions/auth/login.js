module.exports = (api) => {
    const User = api.models.User;

    /**
    * \fn login(req, res, next)
    * \brief log the user
    * \details Check if the user exist and generate a token in the database
    * for the current user
    *
    * \param req, res, next
    * \return the result
    */
    return function login(req, res, next) {
        User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
        .then((user) => {
            if(user) {
                //userId = user.id;
                return res.status(200).send({
                    "userId": user,
                });
            } else {
                return res.status(401).send({code: 401, type:'invalid.credentials', title: 'Identifiants incorrect', message: 'Vos identifiants sont incorrect ou inexistant'});
            }
        }).catch((error) => {
            return res.status(500).send(error);
        });
    };
};
