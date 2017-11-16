const assert = require('assert');
const fetch = require('node-fetch');
const linklet = require('linklet');

describe('Unit tests', () => {
  it('should yield something ...', async () => {
    const service = require('./index');

    const actual = await service();

    assert.deepEqual(actual, {msg: 'Hello World from Linklet!'});
  });
});

describe('Integration tests', () => {
  it('should fetch something ...', async () => {
    const service = require('./index');
    const server = linklet(service);
    const instance = await linklet.listen(server, {silent: true});

    const actual = await fetch(instance.url).then(res => res.json());

    assert.deepEqual(actual, {msg: 'Hello World from Linklet!'});
  });

});