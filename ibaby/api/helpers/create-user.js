var bcrypt = require('bcryptjs');

module.exports = {
  friendlyName: 'Create user',
  description: 'Create a new user',
  inputs: {
    lastname: {
      type: 'string'
    },
    firstname: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    }
  },


  exits: {
    invalid: {
      reponseType: 'badRequest',
      description: 'Email and/or password is/are invalid'
    },
    EmailAlreadyInUse: {
      statutCode: 409,
      description: "Email already in use"
    }
  },


  fn: async function (inputs, exits) {
    let attr = {};
    attr.email = inputs.email.toLowerCase();
    attr.lastname = inputs.lastname;
    attr.firstname = inputs.firstname;
    if(inputs.password){
      attr.password = await bcrypt.hash(inputs.password, 10);
      let user = await User.create(attr)
          .intercept('E_UNIQUE', () => 'EmailAlreadyInUse')
          .intercept({name: 'UsageError'}, () => 'invalid')
          .fetch();
      return exits.success(user);
    }else{
        return exits.invalid("Missing password");
    }
    // All done.
  }
};

