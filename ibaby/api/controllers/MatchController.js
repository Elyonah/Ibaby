/**
 * MatchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    addMatch: async function(req, res){
        let match = await sails.helpers.createMatch.with({
            isInProgress: true,
            isPlayed: false,
            redScore: 0,
            blueScore: 0,
            babyfoot: req.body.babyfoot
        });

        return res.ok({
            match: match
        });
    }
};

