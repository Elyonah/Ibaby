var jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    let token;
    if(req.headers && req.headers.authorization){
        let parts = req.headers.authorization.split(' ');

        if(parts.length === 2){
            let scheme = parts[0];
            let credentials = parts[1];
            if(/^Bearer$/i.test(scheme)){
                token = credentials;
            }
        }else{
            return res.status(400).json('Format is Authorization: Bearer [token]')
        }
    }else{
        return res.status(401).json('No token was found')
    }
    jwt.verify(token, sails.config.jwt.jwtSecret, function(err, decoded){
        if(err) {
            return res.status(401).json('Invalid token')
        }
        req.user = decoded;
        next();
    })
};