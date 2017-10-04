/*
 * Allow to update a School
 * @Return -
 */
 module.exports = (api) => {
   const School = api.models.School;

   return (req, res) {
       let schoolId = req.params.id_school;

       let isDestroyed = (data) => {

           if (!data) {
             res.status(404).send('school.not.found');
           }
           res.status(200).send('school.removed');
       }

         School
         .destroy({
           where : { id : schoolId }
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
