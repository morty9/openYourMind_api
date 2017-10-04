/*
 * Allow to find a recap
 * @Return Recap
 */
module.exports = (api) => {
    const Recap = api.models.Recap;

    return (req, res) => {
        let respond = (recap) => {
            if(!recap){
                res.status(404).send({
                    ErrorCode: 404,
                    Message: "Recap not found"
                });
            } else {
                res.status(200).send(recap);
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Recap.findById(req.params.id)
        .then(respond)
        .catch(returnError);
    };
};
