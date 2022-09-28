const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    IP,
    PORT
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: Andrei");
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  

  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;