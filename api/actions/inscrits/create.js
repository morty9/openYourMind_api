/*
 *  Allow to create an incrit
 * @Return Inscrit
 */
module.exports = (api) => {
    const Inscrit = api.models.Inscrit;

    return (req, res) => {
        let isCreate = (fav) => {
            if (fav) {
                res.status(201).send(fav);
            }
            else {
                res.status(409).send({
                    ErrorCode: 409,
                    message: 'Inscrit already existing'
                })
            }
        }

        Inscrit
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
