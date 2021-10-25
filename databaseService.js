const chalk = require('chalk');

const { log } = console;

class DatabaseService {
  save(email, price, timestamp) {
    log(
      chalk.yellow.bgRed(
        `Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})`
      )
    );
  }
}

module.exports = DatabaseService;
