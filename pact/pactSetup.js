const path = require('path');
const { Pact } = require('@pact-foundation/pact');

const port = 8991;
const provider = new Pact({
  port,
  log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  spec: 2,
  pactfileWriteMode: 'update',
  consumer: 'MyConsumer',
  provider: 'MyProvider',
});


module.exports = {
  provider,
  port,
};
