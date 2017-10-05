/*
 * Allow to find all the favoris
 * @Return [Favoris]
 */
module.exports = (api) => {
    const Favoris = api.models.Favoris;

    return (req, res) => {
        let respond = (fav) => {
            if(fav.lenght === 0){
                res.status(204).send(fav);
            } else {
                res.status(200).send(fav);
            }
        };

        let returnError = (err) => {
            res.status(500).send({ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Favoris.findAll()
        .then(respond)
        .catch(returnError);
    };
};
