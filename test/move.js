
var p = require('..'),
    assert = require('assert');
    
// move particle with velocity

var particle1 = p.createParticle(10, 20, 1, -1);

particle1.move();
assert.equal(particle1.x, 11);
assert.equal(particle1.y, 19);
assert.equal(particle1.dx, 1);
assert.equal(particle1.dy, -1);

// rebound particle againts left wall

var particle2 = p.createParticle(0, 20, -1, -1);

particle2.move({ box: { left: 0, top: 0, right: 10, bottom: 30 } });
assert.equal(particle2.x, 1);
assert.equal(particle2.y, 19);
assert.equal(particle2.dx, 1);
assert.equal(particle2.dy, -1);

// rebound particle againts left wall, not zero

var particle2 = p.createParticle(1, 20, -1, -1);

particle2.move({ box: { left: 1, top: 0, right: 10, bottom: 30 } });
assert.equal(particle2.x, 2);
assert.equal(particle2.y, 19);
assert.equal(particle2.dx, 1);
assert.equal(particle2.dy, -1);

// rebound particle againts right wall

var particle2 = p.createParticle(10, 20, 1, -1);

particle2.move({ box: { left: 0, top: 0, right: 10, bottom: 30 } });
assert.equal(particle2.x, 9);
assert.equal(particle2.y, 19);
assert.equal(particle2.dx, -1);
assert.equal(particle2.dy, -1);

// rebound particle againts top wall

var particle2 = p.createParticle(5, 1, 1, -1);

particle2.move({ box: { left: 0, top: 1, right: 10, bottom: 30 } });
assert.equal(particle2.x, 6);
assert.equal(particle2.y, 2);
assert.equal(particle2.dx, 1);
assert.equal(particle2.dy, 1);

// rebound particle againts bottom wall

var particle2 = p.createParticle(5, 10, 1, 1);

particle2.move({ box: { left: 0, top: 0, right: 10, bottom: 10 } });
assert.equal(particle2.x, 6);
assert.equal(particle2.y, 9);
assert.equal(particle2.dx, 1);
assert.equal(particle2.dy, -1);
