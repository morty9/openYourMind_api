/*
 * Allow to remove an envement
 * @Return Event
 */
module.exports = (api) => {
    const Evenement = api.models.Evenement;

    return (req, res) => {
       let eventId = req.params.id_event;

         Evenement
         .destroy({
           where : { id : assoId }
         })
         .then((data) => {
           if (!data) {
             res.status(404).send('event.not.found');
           }
           res.status(200).send('event.removed');
         })
         .catch((err) => {
           res.status(500).send(err);
         })
     };

};
