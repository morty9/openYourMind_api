/*
 * Allow to remove an inscrit
 * @Return Inscrit
 */
module.exports = (api) => {
    const Inscrit = api.models.Inscrit;

    return (req, res) => {
       let inscritId = req.params.id_inscrit;

         Inscrit
         .destroy({
           where : { id : inscritId }
         })
         .then((data) => {
           if (!data) {
             res.status(404).send('inscrit.not.found');
           }
           res.status(200).send('inscrit.removed');
         })
         .catch((err) => {
           res.status(500).send(err);
         })
     };

};
