/*
 * Allow to find an session
 * @Return Session
 */
module.exports = (api) => {
    const Session = api.models.Session;

    return (req, res) => {
        let respond = (session) => {
            if(!session){
                res.status(404).send({
                    ErrorCode: 404,
                    Message: "Session not found"
                });
            } else {
                res.status(200).send(session);
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Session.findById(req.params.id)
        .then(respond)
        .catch(returnError);
    };
};
