
var p = require('..');
    
exports['create particle'] = function (test) {
    var particle = p.createParticle(10, 20);
    test.ok(particle);
    test.equal(particle.x, 10);
    test.equal(particle.y, 20);
    test.equal(particle.dx, 0);
    test.equal(particle.dy, 0);
}

exports['create particle without parameters'] = function (test) {
    var particle = p.createParticle();
    test.ok(particle);
    test.equal(particle.x, 0);
    test.equal(particle.y, 0);
    test.equal(particle.dx, 0);
    test.equal(particle.dy, 0);
}

exports['create particle with velocity'] = function (test) {
    var particle = p.createParticle(10, 20, 1, -1);
    test.ok(particle);
    test.equal(particle.x, 10);
    test.equal(particle.y, 20);
    test.equal(particle.dx, 1);
    test.equal(particle.dy, -1);
}
