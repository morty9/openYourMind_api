/*
 * Allow to remove a Recap
 * @Return Recap
 */
module.exports = (api) => {
    const Recap = api.models.Recap;

    return (req, res) => {
       let recapId = req.params.id_recap;

         Recap
         .destroy({
           where : { id : recapId }
         })
         .then((data) => {
           if (!data) {
             res.status(404).send('recap.not.found');
           }
           res.status(200).send('recap.removed');
         })
         .catch((err) => {
           res.status(500).send(err);
         })
     };

};
