/*
 * Allow to find all the associations
 * @Return [Assos]
 */
module.exports = (api) => {
    const Assos = api.models.Assos;

    return (req, res) => {
        let respond = (assos) => {
            if(assos.lenght === 0){
                res.status(204).send(assos);
            } else {
                res.status(200).send(assos);
            }
        };

        let returnError = (err) => {
            res.status(500).send({ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        User.findAll()
        .then(respond)
        .catch(returnError);
    };
};
