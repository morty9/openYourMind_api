/*
 * Allow to update an evenement
 * @Return -
 */
 module.exports = (api) => {
   const Evenement = api.models.Evenement;

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

       Evenement.update(req.body,
           { where: { id: req.params.id }
       }).then(respond)
       .catch(returnError);
   };
 };
