/*
 * Allow to find all the type
 * @Return [Type]
 */
module.exports = (api) => {
    const Type = api.models.Type;

    return (req, res) => {
        let respond = (type) => {
            if(type.lenght === 0){
                res.status(204).send(type);
            } else {
                res.status(200).send(type);
            }
        };

        let returnError = (err) => {
            res.status(500).send({ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Type.findAll()
        .then(respond)
        .catch(returnError);
    };
};
