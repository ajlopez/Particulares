
var p = require('..'),
    assert = require('assert');
    
// create particle

var particle1 = p.createParticle(10, 20);
assert.ok(particle1);
assert.equal(particle1.x, 10);
assert.equal(particle1.y, 20);
assert.equal(particle1.dx, 0);
assert.equal(particle1.dy, 0);

