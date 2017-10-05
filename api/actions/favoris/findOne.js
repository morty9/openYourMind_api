/*
 * Allow to find an favoris
 * @Return Favoris
 */
module.exports = (api) => {
    const Favoris = api.models.Favoris;

    return (req, res) => {
        let respond = (fav) => {
            if(!fav){
                res.status(404).send({
                    ErrorCode: 404,
                    Message: "Favoris not found"
                });
            } else {
                res.status(200).send(fav);
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Favoris.findById(req.params.id)
        .then(respond)
        .catch(returnError);
    };
};
