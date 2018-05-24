module.exports = {
    friendlyName: 'Create booking',
    description: 'Create a new booking',
    inputs: {
        babyfoot: {
            type: 'number'
        },
        owner: {
            type: 'number'
        },
        date: {
            type: 'number'
        },
        hour: {
            type: 'number'
        },
        players: {
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
        attr.date = inputs.date;
        attr.hour = inputs.hour;
        attr.players = inputs.players;
        attr.owner = inputs.owner;
        attr.babyfoot = inputs.babyfoot;
        if(inputs.owner !== ''){
            let book = await Booking.create(attr)
                .fetch();
            return exits.success(book);
        }else{
            return exits.invalid("Something went wrong");
        }
        // All done.
    }
};

