/*
 * Allow to find all the associations
 * @Return [Event]
 */
module.exports = (api) => {
    const Evenement = api.models.Evenement;

    return (req, res) => {
        let respond = (evenement) => {
            if(evenement.lenght === 0){
                res.status(204).send(evenement);
            } else {
                res.status(200).send(evenement);
            }
        };

        let returnError = (err) => {
            res.status(500).send({ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Evenement.findAll()
        .then(respond)
        .catch(returnError);
    };
};
