const JWT = require('jsonwebtoken');

const secret = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxMzUwMDY0NCwiaWF0IjoxNzEzNTAwNjQ0fQ.fM01gMaeti97sFNIOdXlkDGM3g9l5YcwVfLFw0eJzwc'; 

const generateJWT = (payload) =>{
    try{
        return JWT.sign(payload, secret, {expiresIn:'24h'});
    }catch(error){
        console.error(error);
    }
};

const verifyToken = (token) =>{
    try{
        const jwt = token.split(' ')[1];
        return JWT.verify(jwt, secret);
    }catch(error){
        return null;
    }
};

module.exports ={
    generateJWT,
    verifyToken
};
