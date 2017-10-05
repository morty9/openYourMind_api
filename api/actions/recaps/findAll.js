/*
 * Allow to find all the recap
 * @Return [Recap]
 */
module.exports = (api) => {
    const Recaps = api.models.Recap;

    return (req, res) => {
        let respond = (recaps) => {
            if(recaps.lenght === 0){
                res.status(204).send(recaps);
            } else {
                res.status(200).send(recaps);
            }
        };

        let returnError = (err) => {
            res.status(500).send({ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Recaps.findAll()
        .then(respond)
        .catch(returnError);
    };
};
