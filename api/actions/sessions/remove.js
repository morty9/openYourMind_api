/*
 * Allow to remove an session
 * @Return Session
 */
module.exports = (api) => {
    const Session = api.models.Session;

    return (req, res) => {
       let sessionId = req.params.id_session;

         Session
         .destroy({
           where : { id : sessionId }
         })
         .then((data) => {
           if (!data) {
             res.status(404).send('session.not.found');
           }
           res.status(200).send('session.removed');
         })
         .catch((err) => {
           res.status(500).send(err);
         })
     };

};
