/*
 *  Allow to remove an user
 */

module.exports = (api) => {
  const User = api.models.User;

  return (req, res) => {
      let userId = req.params.id_user;

      let isDestroyed = (data) => {

          if (!data) {
            res.status(404).send({
              ErrorCode: 404,
            message: 'user.not.found'});
          }
          res.status(200).send('User removed');
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
