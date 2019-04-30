const publisher = require('@pact-foundation/pact');
const path = require('path');

const { pactBrokerUsername, pactBrokerPassword } = require('./config');


const opts = {
  providerBaseUrl: 'http://localhost:8080',
  pactFilesOrDirs: [path.resolve(process.cwd(), 'pacts')],
  pactBroker: 'https://localhost:3000',
  pactBrokerUsername,
  pactBrokerPassword,
  consumerVersion: '2.0.0',
};

publisher.publishPacts(opts).then(() => done());
