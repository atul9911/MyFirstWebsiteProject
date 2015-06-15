
var mysql = require('mysql');

var mySqlConnectionString = mysql.createConnection({
    host: '127.0.0.1',
    port: '4444',
    user: 'root',
    password: 'root'
});

var Connection = {
    mySqlConnection: function (err) {
        if (err) return err;
        mySqlConnectionString.connect(function (err) {
            if (err) console.log('');
            else console.log('Connected');
        });
        return mySqlConnectionString;
    }
}

exports.Connection = Connection;