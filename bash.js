const commands = require("./commands");

process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let cmd = data.toString().trim(); //
  let args = cmd.split(" ");
  let comando = args[0];
  let argumentos = args.slice(1);
  console.log(comando, argumentos);

  commands[comando](argumentos);
});
