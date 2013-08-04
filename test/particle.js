
var p = require('..'),
    assert = require('assert');
    
// create particle

var particle1 = p.createParticle(10, 20);
assert.ok(particle1);
assert.equal(particle1.x, 10);
assert.equal(particle1.y, 20);
assert.equal(particle1.dx, 0);
assert.equal(particle1.dy, 0);

// create particle without parameters

var particle2 = p.createParticle();
assert.ok(particle2);
assert.equal(particle2.x, 0);
assert.equal(particle2.y, 0);
assert.equal(particle2.dx, 0);
assert.equal(particle2.dy, 0);

// create particle with velocity

var particle3 = p.createParticle(10, 20, 1, -1);
assert.ok(particle3);
assert.equal(particle3.x, 10);
assert.equal(particle3.y, 20);
assert.equal(particle3.dx, 1);
assert.equal(particle3.dy, -1);


