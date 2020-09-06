const jwt = require('jsonwebtoken');
const fs = require('fs');

const { validator } = require('../build/index');

describe('The validator', () => {
  const jsonFile = fs.readFileSync('./tests/test_keys/config.json').toString();
  const config = JSON.parse(jsonFile);

  const privateKey = fs
    .readFileSync(`./tests/test_keys/${config.private}.pem`)
    .toString();

  const payload = {
    Hankow: 'is the best city in China',
  };

  const issueToken = () =>
    jwt.sign(
      payload,
      {
        key: privateKey,
        passphrase: config.passphrase,
      },
      { algorithm: 'RS256' }
    );

  const token = issueToken();

  it('shall issue a valid token using fake private key', () => {
    expect(!token).toBe(false);
  });

  it('shall verify the token using the private key provided', () => {
    const keyPath = `./tests/test_keys/${config.public}.pub`;
    const checker = validator(keyPath);
    const res = checker(token);

    console.log(res);
    expect(!res).toBe(false);
  });
});
