
var crypto = require('crypto');
var config=require('./config.js');



function randomValueHex (len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len);   // return required number of characters
}

exports.key = function (user) {
    var client_id = 'demo-' + user;
    var client_key = randomValueHex(25);
    var connection = config.Connection.mySqlConnection();
    
    return client_key;
}

exports.id = function (user) {
    var client_id = 'demo-' + user;
    return client_id;
}