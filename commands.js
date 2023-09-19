function pwd() {
  let path = process.cwd();
  process.stdout.write(path + "\n");
}

function date() {
  let date = Date();
  process.stdout.write(date + "\n");
}

function echo(argumentos) {
  let echo = argumentos.join(" ");
  process.stdout.write(echo);
}

function cat(argumentos) {
  argumentos.forEach((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        return;
      }
      return process.stdout.write(data);
    });
  });
}

function head(argumentos) {
  fs.readFile(`./${argumentos}`, "utf-8", (err, data) => {
    if (err) {
      throw new Error(err);
    }
    const headSplit = data.split("\n").slice(0, 5);
    let x = headSplit.join("\n");
    process.stdout.write(x);
  });
}

function curl(get) {}

const fs = require("fs");

fs.readdir(".", function (err, files) {
  if (err) throw err;
  files.forEach(function (file) {
    process.stdout.write(file.toString() + "\n");
  });
  process.stdout.write("prompt > ");
});

const request = require("request");
module.exports = { pwd, date, echo, cat, head, curl };
