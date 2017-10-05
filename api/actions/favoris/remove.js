/*
 * Allow to remove an remote
 * @Return Remote
 */
module.exports = (api) => {
    const Favoris = api.models.Favoris;

    return (req, res) => {
       let favId = req.params.id_fav;

         Favoris
         .destroy({
           where : { id : favId }
         })
         .then((data) => {
           if (!data) {
             res.status(404).send('fav.not.found');
           }
           res.status(200).send('fav.removed');
         })
         .catch((err) => {
           res.status(500).send(err);
         })
     };

};
