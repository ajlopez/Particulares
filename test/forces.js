
var p = require('..'),
    assert = require('assert');
    
// move particle applying force

var particle1 = p.createParticle(10, 20);

particle1.move([{ fx: 1, fy: 2 }]);
assert.equal(particle1.x, 11);
assert.equal(particle1.y, 22);
assert.equal(particle1.dx, 1);
assert.equal(particle1.dy, 2);
