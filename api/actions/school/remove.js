/*
 * Allow to remove a School
 * @Return School
 */
module.exports = (api) => {
    const School = api.models.School;

    return (req, res) => {
       let schoolId = req.params.id_school;

         School
         .destroy({
           where : { id : schoolId }
         })
         .then((data) => {
           if (!data) {
             res.status(404).send('school.not.found');
           }
           res.status(200).send('school.removed');
         })
         .catch((err) => {
           res.status(500).send(err);
         })
     };

};
