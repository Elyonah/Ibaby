/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    email: {
      type: 'string',
      unique: true,
      required: true,
      isEmail: true,
      maxLength: 250,
      example: "example@mycompany.com"
    },
    lastname: {
      type: 'string',
      maxLength: 250,
      example: "Dupont"
    },
    firstname: {
      type: 'string',
      maxLength: 250,
      example: "Jean"
    },
    birthdate: {
      type: 'number',
      isBefore: new Date()
    },
    gender: {
      type: 'string',
      isIn: ['male', 'female']
    },
    password: {
      type: 'string',
      required: true,
      minLength: 8
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    team: {
      model: 'team'
    },
    userMatch: {
      collection: 'usermatch',
      via: 'user'
    }

  }

};

