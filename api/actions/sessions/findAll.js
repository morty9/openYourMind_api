/*
 * Allow to find all the session
 * @Return [Session]
 */
module.exports = (api) => {
    const Session = api.models.Session;

    return (req, res) => {
        let respond = (session) => {
            if(session.lenght === 0){
                res.status(204).send(session);
            } else {
                res.status(200).send(session);
            }
        };

        let returnError = (err) => {
            res.status(500).send({ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Session.findAll()
        .then(respond)
        .catch(returnError);
    };
};
