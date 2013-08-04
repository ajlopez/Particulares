
var p = require('..'),
    assert = require('assert');
    
// particles with horizontal spring

var particle1 = p.createParticle(0, 0);
var particle2 = p.createParticle(10, 0);

particle1.spring(particle2, 8, 1);

particle1.move();
assert.equal(particle1.x, 2);
assert.equal(particle1.y, 0);
assert.equal(particle1.dx, 2);
assert.equal(particle1.dy, 0);
