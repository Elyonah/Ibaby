module.exports = {
    friendlyName: 'Create user match',
    description: 'Create a user match',
    inputs: {
        color: {
            type: 'string'
        },
        user: {
            type: 'number'
        },
        match: {
            type: 'number'
        }
    },

    exits: {
        invalid: {
            reponseType: 'badRequest',
            description: 'Somethong went wrong'
        }
    },

    fn: async function (inputs, exits) {
        let attr = {};
        attr.color = inputs.color;
        attr.user = inputs.user;
        attr.match = inputs.match;
        if(inputs.match !== ''){
            let usermatch = await UserMatch.create(attr)
                .fetch();
            return exits.success(usermatch);
        }else{
            return exits.invalid("Something went wrong");
        }
        // All done.
    }
};

