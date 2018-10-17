var expect = require('expect');
var {generateMessage} = require('./message.js')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'gladwin';
    var text = 'hello world';

    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    // expect(message).toInclude({from, text});

  });
});
