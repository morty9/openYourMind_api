/*
 * Allow to remove an association
 * @Return Asso
 */
module.exports = (api) => {
    const Asso = api.models.Assos;

    return (req, res) => {
       let assoId = req.params.id_asso;

         Asso
         .destroy({
           where : { id : assoId }
         })
         .then((data) => {
           if (!data) {
             res.status(404).send('asso.not.found');
           }
           res.status(200).send('asso.removed');
         })
         .catch((err) => {
           res.status(500).send(err);
         })
     };

};
