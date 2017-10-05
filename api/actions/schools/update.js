/*
 * Allow to update a School
 * @Return -
 */
 module.exports = (api) => {
   const School = api.models.School;

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

       School.update(req.body,
           { where: { id: req.params.id }
       }).then(respond)
       .catch(returnError);
   };
};
