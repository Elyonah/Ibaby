module.exports = {
    friendlyName: 'Create match',
    description: 'Create a new match',
    inputs: {
        isInProgress: {
            type: 'boolean'
        },
        isPlayed: {
            type: 'boolean'
        },
        redScore: {
            type: 'number'
        },
        blueScore: {
            type: 'number'
        },
        babyfoot: {
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
        attr.isInProgress = inputs.isInProgress;
        attr.isPlayed = inputs.isPlayed;
        attr.redScore = inputs.redScord;
        attr.blueScore = inputs.blueScore;
        attr.babyfoot = inputs.babyfoot;
        if(inputs.babyfoot != null){
            let match = await Match.create(attr)
                .fetch();
            return exits.success(match);
        }else{
            return exits.invalid("Oops");
        }
        // All done.
    }
};

