/*
 * Allow to find an evenement
 * @Return Event
 */
module.exports = (api) => {
    const Evenement = api.models.Evenement;

    return (req, res) => {
        let respond = (evenement) => {
            if(!evenement){
                res.status(404).send({
                    ErrorCode: 404,
                    Message: "Evenement not found"
                });
            } else {
                res.status(200).send(evenement);
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Evenement.findById(req.params.id)
        .then(respond)
        .catch(returnError);
    };
};
