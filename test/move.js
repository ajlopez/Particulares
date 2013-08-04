
var p = require('..'),
    assert = require('assert');
    
// move particle with velocity

var particle1 = p.createParticle(10, 20, 1, -1);

particle1.move();
assert.equal(particle1.x, 11);
assert.equal(particle1.y, 19);
assert.equal(particle1.dx, 1);
assert.equal(particle1.dy, -1);
