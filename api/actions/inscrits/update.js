/*
 * Allow to update an inscrit
 * @Return -
 */
 module.exports = (api) => {
   const Inscrit = api.models.Inscrit;

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

       Inscrit.update(req.body,
           { where: { id: req.params.id }
       }).then(respond)
       .catch(returnError);
   };
 };
