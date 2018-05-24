/**
 * BookingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    addBooking: async function(req, res){
        let booking = await sails.helpers.createBooking.with({
            babyfoot: req.body.babyfoot,
            owner: req.body.owner,
            date: req.body.date,
            hour: req.body.hour,
            players: req.body.players,
        });

        return res.ok({
            booking: booking
        });
    }

};

