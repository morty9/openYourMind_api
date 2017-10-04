/*
 * Allow to find all the schools
 * @Return [Schools]
 */
module.exports = (api) => {
    const Schools = api.models.School;

    return (req, res) => {
        let respond = (schools) => {
            if(schools.lenght === 0){
                res.status(204).send(schools);
            } else {
                res.status(200).send(schools);
            }
        };

        let returnError = (err) => {
            res.status(500).send({ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Schools.findAll()
        .then(respond)
        .catch(returnError);
    };
};
