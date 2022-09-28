const net = require("net");

const connection = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  

  conn.setEncoding("utf8");

  return conn;
};
console.log("Connecting ...");
connection();