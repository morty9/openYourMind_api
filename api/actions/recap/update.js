/*
 * Allow to update a recap
 * @Return -
 */
 module.exports = (api) => {
   const Recap = api.models.Recap;

   return (req, res) => {
       let recapId = req.params.id_recap;

       let isDestroyed = (data) => {

           if (!data) {
             res.status(404).send('recap.not.found');
           }
           res.status(200).send('recap.removed');
       }

         Recap
         .destroy({
           where : { id : recapId }
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
