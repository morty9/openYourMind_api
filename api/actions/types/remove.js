/*
 * Allow to remove an type
 * @Return Type
 */
module.exports = (api) => {
    const Type = api.models.Type;

    return (req, res) => {
       let typeId = req.params.id_type;

         Type
         .destroy({
           where : { id : typeId }
         })
         .then((data) => {
           if (!data) {
             res.status(404).send('type.not.found');
           }
           res.status(200).send('type.removed');
         })
         .catch((err) => {
           res.status(500).send(err);
         })
     };

};
