
var p = require('..');
    
exports['particles with horizontal spring'] = function (test) {
    var particle1 = p.createParticle(0, 0);
    var particle2 = p.createParticle(10, 0);

    particle1.spring(particle2, 8, 1);

    particle1.move();
    test.equal(particle1.x, 2);
    test.equal(particle1.y, 0);
    test.equal(particle1.dx, 2);
    test.equal(particle1.dy, 0);
}
    
exports['particles with vertical spring'] = function (test) {
    var particle1 = p.createParticle(0, 0);
    var particle2 = p.createParticle(0, 10);

    particle1.spring(particle2, 8, 1);

    particle1.move();
    test.equal(particle1.x, 0);
    test.equal(particle1.y, 2);
    test.equal(particle1.dx, 0);
    test.equal(particle1.dy, 2);
}

exports['particles with diagonal spring'] = function (test) {
    var particle1 = p.createParticle(0, 0);
    var particle2 = p.createParticle(3, 4);

    particle1.spring(particle2, 4, 1);

    particle1.move();

    test.notEqual(particle1.x, 0);
    test.notEqual(particle1.y, 0);
    test.notEqual(particle1.dx, 0);
    test.notEqual(particle1.dy, 0);

    test.notEqual(particle2.x, 0);
    test.notEqual(particle2.y, 0);
    test.notEqual(particle2.dx, 0);
    test.notEqual(particle2.dy, 0);
    test.ok(particle1.dx > 0);
    test.ok(particle1.dy > 0);
    test.ok(particle2.dx < 0);
    test.ok(particle2.dy < 0);
}

exports['particles with diagonal spring 2'] = function (test) {
    var particle1 = p.createParticle(4, 0);
    var particle2 = p.createParticle(1, 4);

    particle1.spring(particle2, 4, 1);

    particle1.move();

    test.notEqual(particle1.x, 0);
    test.notEqual(particle1.y, 0);
    test.notEqual(particle1.dx, 0);
    test.notEqual(particle1.dy, 0);

    test.notEqual(particle2.x, 0);
    test.notEqual(particle2.y, 0);
    test.notEqual(particle2.dx, 0);
    test.notEqual(particle2.dy, 0);
    test.ok(particle1.dx < 0);
    test.ok(particle1.dy > 0);
    test.ok(particle2.dx > 0);
    test.ok(particle2.dy < 0);
}

