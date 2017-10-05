/*
 *  Allow to create an favoris
 * @Return Favoris
 */
module.exports = (api) => {
    const Favoris = api.models.Favoris;

    return (req, res) => {
        let isCreate = (fav) => {
            if (fav) {
                res.status(201).send(fav);
            }
            else {
                res.status(409).send({
                    ErrorCode: 409,
                    message: 'Favoris already existing'
                })
            }
        }

        Favoris
            .build(req.body)
            .save()
            .then(isCreate)
            .catch(error);

        function error(err) {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        }
    };
};
