/*
 * Allow to update an association
 * @Return -
 */
 module.exports = (api) => {
   const Asso = api.models.Assos;

   return (req, res) => {
       let assoId = req.params.id_asso;

       let isDestroyed = (data) => {

           if (!data) {
             res.status(404).send('asso.not.found');
           }
           res.status(200).send('asso.removed');
       }

         Asso
         .destroy({
           where : { id : assoId }
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
