/*
*  Allow to create an user
*  @return Notes
*/

module.exports = (api) => {
   const Notes = api.models.Note;

  return (req, res) => {
    let isCreate = (note) => {
      if (note) {
        res.status(201).send(note);
      } else {
        res.status(409).send({
          ErrorCode: 409,
          message: 'Notes already existing'
        });
      }
    }

    User
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
