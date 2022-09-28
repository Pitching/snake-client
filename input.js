let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  let upInt;
  let leftInt;
  let downInt;
  let rightInt;
  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      clearInterval(upInt);
      clearInterval(leftInt);
      clearInterval(downInt);
      clearInterval(rightInt);
      upInt = setInterval(() => { connection.write('Move: up') }, 50);
    }
    if (key === 'a') {
      clearInterval(upInt);
      clearInterval(leftInt);
      clearInterval(downInt);
      clearInterval(rightInt);
      leftInt = setInterval(() => { connection.write('Move: left') }, 50);
    }
    if (key === 's') {
      clearInterval(upInt);
      clearInterval(leftInt);
      clearInterval(downInt);
      clearInterval(rightInt);
      downInt = setInterval(() => { connection.write('Move: down') }, 50);
    }
    if (key === 'd') {
      clearInterval(upInt);
      clearInterval(leftInt);
      clearInterval(downInt);
      clearInterval(rightInt);
      rightInt = setInterval(() => { connection.write('Move: right') }, 50);
    }
    if (key === 'e') {
      connection.write('Say: snek')
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};



module.exports = setupInput;