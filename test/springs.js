
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
    
// particles with vertical spring

var particle1 = p.createParticle(0, 0);
var particle2 = p.createParticle(0, 10);

particle1.spring(particle2, 8, 1);

particle1.move();
assert.equal(particle1.x, 0);
assert.equal(particle1.y, 2);
assert.equal(particle1.dx, 0);
assert.equal(particle1.dy, 2);
    
// particles with diagonal spring

var particle1 = p.createParticle(0, 0);
var particle2 = p.createParticle(3, 4);

particle1.spring(particle2, 6, 1);

particle1.move();
assert.notEqual(particle1.x, 0);
assert.notEqual(particle1.y, 0);
assert.notEqual(particle1.dx, 0);
assert.notEqual(particle1.dy, 0);

assert.notEqual(particle2.x, 0);
assert.notEqual(particle2.y, 0);
assert.notEqual(particle2.dx, 0);
assert.notEqual(particle2.dy, 0);
