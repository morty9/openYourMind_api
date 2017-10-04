/*
 *  ALlow to update an Note
 */
module.exports = (api) => {
    const Note = api.models.Note;

    return (req, res) => {
        let respond = (result) => {
            res.sendStatus(201);
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        User.update(req.body,
            { where: { id: req.params.id }
        }).then(respond)
        .catch(returnError);
    };
};
