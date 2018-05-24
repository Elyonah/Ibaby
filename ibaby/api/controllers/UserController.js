/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

module.exports = {
  login: async function(req, res){
    let user = await User.findOne({email: req.body.email});
    if(!user) {
        return res.notFound();
    }
      let isIdentical = bcrypt.compareSync(req.body.password, user.password);

      if(!isIdentical)
        return res.notFound();

    let token = jwt.sign({
            id: user.id,
            email: user.email
        }, sails.config.jwt.jwtSecret, {expiresIn: sails.config.jwt.jwtExpiresIn});

    return res.ok({
        token: token,
        user: {
           email: user.email,
           id: user.id,
           firstname: user.firstname,
           lastname: user.lastname
        }
    });
  },
  register: async function(req, res){
    let user = await sails.helpers.createUser.with({
          lastname: req.body.lastname,
          firstname: req.body.firstname,
          email: req.body.email,
          password: req.body.password
      });

    let token = jwt.sign({
            id: user.id,
            email: user.email,
        }, sails.config.jwt.jwtSecret, {expiresIn : sails.config.jwt.jwtExpiresIn});
    return res.ok({
        token: token,
        user: {
            email: user.email,
            id: user.id
        }
    });
  }
};

