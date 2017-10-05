/*
 * Allow to find an type
 * @Return Type
 */
module.exports = (api) => {
    const Type = api.models.Type;

    return (req, res) => {
        let respond = (type) => {
            if(!type){
                res.status(404).send({
                    ErrorCode: 404,
                    Message: "Type not found"
                });
            } else {
                res.status(200).send(type);
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Type.findById(req.params.id)
        .then(respond)
        .catch(returnError);
    };
};
