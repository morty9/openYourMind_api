/*
 *  Allow to remove an note
 */

module.exports = (api) => {
  const Note = api.models.Note;

  return (req, res) {
      let userId = req.params.id_user;

      let isDestroyed = (data) => {

          if (!data) {
            res.status(404).send({
              ErrorCode: 404,
            message: 'note.not.found'});
          }
          res.status(200).send('Note removed');
      }

        User
        .destroy({
          where : { id : userId }
        })
        .then(isDestroyed)
        .catch(error);



        function error(err) {
          res.status(500).send({
            ErrorCode: 500,
            message: JSON.stringify(err)
          });
        }

    };
};
