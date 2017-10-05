/*
 * Allow to find all the inscrit
 * @Return [Inscrit]
 */
module.exports = (api) => {
    const Inscrit = api.models.Inscrit;

    return (req, res) => {
        let respond = (inscrit) => {
            if(inscrit.lenght === 0){
                res.status(204).send(inscrit);
            } else {
                res.status(200).send(inscrit);
            }
        };

        let returnError = (err) => {
            res.status(500).send({ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Inscrit.findAll()
        .then(respond)
        .catch(returnError);
    };
};
