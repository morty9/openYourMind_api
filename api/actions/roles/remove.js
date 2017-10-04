module.exports = (api) => {
    const Roles = api.models.Roles;
    const fs = require('fs');

    return (req, res) => {
        let respond = (destroyedRowsCount) => {
                    if(destroyedRowsCount === 1){
                        res.status(201).send("Delete complet");
                    } else {
                        res.status(404).send({
                            ErrorCode: 404,
                            message: "Roles not found"
                        });
                    }
                }

        let destroy = (roles) => {
            if(!roles){
                res.status(404).send({ 
                    ErrorCode: 404,
                    Message: "Roles not found"
                });
            } else {
                let spawn = require("child_process").spawn;
                let process = spawn('python3',["modules/valkyri_face_py", "-r", roles.id]);
                
                fs.unlink(roles.image_path, (err) => {
                    
                }); // Arrow function de gestion d'erreur obligatoire

                let rolesId = roles.id;
                Roles.destroy(
                    { where: { id: rolesId } 
                }).then(respond).catch((error) => {
                    res.status(500).send(error.message);
                });

                res.status(200).send(roles);
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        Roles.findById(req.params.id)
        .then(destroy)
        .catch(returnError);
    };
};
