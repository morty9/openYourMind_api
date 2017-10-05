/*
 * Allow to update an association
 * @Return -
 */
 module.exports = (api) => {
   const Type = api.models.Type;

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

       Type.update(req.body,
           { where: { id: req.params.id }
       }).then(respond)
       .catch(returnError);
   };
 };
