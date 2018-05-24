/**
 * UserMatchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    addUserMatch: async function(req, res){
        let usermatch = await sails.helpers.createUserMatch.with({
            color: req.body.color,
            user: req.body.user,
            match: req.body.match
        });

        return res.ok({
            usermatch: usermatch
        });
    }

};

