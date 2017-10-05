/*
 * Allow to update a recap
 * @Return -
 */
module.exports = (api) => {
 const Recap = api.models.Recap;

 return (req, res) => {
   let respond = (result) => {
     res.sendStatus(201);
   };

   let returnError = (err) => {
     res.status(500).send({
       ErrorCode: 500,
       message: JSON.stringify(err)
     });
   };

   Recap.update(req.body,
     { where: {id: req.params.id}
   }).then(respond)
   .catch(returnError);
 };
};
