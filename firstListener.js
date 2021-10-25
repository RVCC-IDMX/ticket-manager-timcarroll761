const chalk = require('chalk');
const TicketManager = require('./ticketManager');

const { log } = console;

const ticketManager = new TicketManager(10);

ticketManager.on('buy', () => {
  log(chalk.red.bgGreen('Someone bought a ticket!'));
});

ticketManager.buy('test@email.com', 20);
ticketManager.buy('test@email.com', 20);

ticketManager.once('buy', () => {
  console.log('This is only called once');
});

ticketManager.buy('test@email.com', 20);
ticketManager.buy('test@email.com', 20);
