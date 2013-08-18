
var p = require('..');
    
exports['move particle with velocity'] = function (test) {
    var particle = p.createParticle(10, 20, 1, -1);

    particle.move();
    test.equal(particle.x, 11);
    test.equal(particle.y, 19);
    test.equal(particle.dx, 1);
    test.equal(particle.dy, -1);
}

exports['rebound particle againts left wall'] = function (test) {
    var particle = p.createParticle(0, 20, -1, -1);

    particle.move({ box: { left: 0, top: 0, right: 10, bottom: 30 } });
    test.equal(particle.x, 1);
    test.equal(particle.y, 19);
    test.equal(particle.dx, 1);
    test.equal(particle.dy, -1);
}

exports['rebound particle againts left wall, not zero'] = function (test) {
    var particle = p.createParticle(1, 20, -1, -1);

    particle.move({ box: { left: 1, top: 0, right: 10, bottom: 30 } });
    test.equal(particle.x, 2);
    test.equal(particle.y, 19);
    test.equal(particle.dx, 1);
    test.equal(particle.dy, -1);
}

exports['rebound particle againts right wall'] = function (test) {
    var particle = p.createParticle(10, 20, 1, -1);

    particle.move({ box: { left: 0, top: 0, right: 10, bottom: 30 } });
    test.equal(particle.x, 9);
    test.equal(particle.y, 19);
    test.equal(particle.dx, -1);
    test.equal(particle.dy, -1);
}

exports['rebound particle againts top wall'] = function (test) {
    var particle = p.createParticle(5, 1, 1, -1);

    particle.move({ box: { left: 0, top: 1, right: 10, bottom: 30 } });
    test.equal(particle.x, 6);
    test.equal(particle.y, 2);
    test.equal(particle.dx, 1);
    test.equal(particle.dy, 1);
}

exports['rebound particle againts bottom wall'] = function (test) {
    var particle = p.createParticle(5, 10, 1, 1);

    particle.move({ box: { left: 0, top: 0, right: 10, bottom: 10 } });
    test.equal(particle.x, 6);
    test.equal(particle.y, 9);
    test.equal(particle.dx, 1);
    test.equal(particle.dy, -1);
}
