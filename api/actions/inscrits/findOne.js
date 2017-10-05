/*
 * Allow to find an inscrit
 * @Return Inscrit
 */
module.exports = (api) => {
    const Inscrit = api.models.Inscrit;

    return (req, res) => {
        let respond = (inscrit) => {
            if(!inscrit){
                res.status(404).send({
                    ErrorCode: 404,
                    Message: "Inscrit not found"
                });
            } else {
                res.status(200).send(inscrit);
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Inscrit.findById(req.params.id)
        .then(respond)
        .catch(returnError);
    };
};
