/*
* Allow to find all notes
* @return Note[]
*/
module.exports = (api) => {
    const Note = api.models.Note;

    return (req, res) => {
        let respond = (notes) => {
            if(notes.lenght === 0){
                res.status(204).send(notes);
            } else {
                res.status(200).send(notes);
            }
        };

        let returnError = (err) => {
            res.status(500).send({ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Note.findAll()
        .then(respond)
        .catch(returnError);
    };
};
