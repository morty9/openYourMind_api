/*
* Allow to find one note
* @return note
*/

module.exports = (api) => {
    const Note = api.models.Note;

    return (req, res) => {
        let respond = (note) => {
            if(!note){
                res.status(404).send({
                    ErrorCode: 404,
                    Message: "Notes not found"
                });
            } else {
                res.status(200).send(note);
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Note.findById(req.params.id)
        .then(respond)
        .catch(returnError);
    };
};
