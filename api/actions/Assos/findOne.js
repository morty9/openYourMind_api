/*
 * Allow to find an association
 * @Return Asso
 */
module.exports = (api) => {
    const Asso = api.models.Assos;

    return (req, res) => {
        let respond = (asso) => {
            if(!asso){
                res.status(404).send({
                    ErrorCode: 404,
                    Message: "Asso not found"
                });
            } else {
                res.status(200).send(asso);
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Asso.findById(req.params.id)
        .then(respond)
        .catch(returnError);
    };
};
