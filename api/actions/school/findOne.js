/*
 * Allow to find a school
 * @Return School
 */
module.exports = (api) => {
    const School = api.models.School;

    return (req, res) => {
        let respond = (school) => {
            if(!school){
                res.status(404).send({
                    ErrorCode: 404,
                    Message: "School not found"
                });
            } else {
                res.status(200).send(school);
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        School.findById(req.params.id)
        .then(respond)
        .catch(returnError);
    };
};
