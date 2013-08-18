
var p = require('..');
    
exports['move particle applying force'] = function (test) {
    var particle1 = p.createParticle(10, 20);

    particle1.move([{ fx: 1, fy: 2 }]);
    test.equal(particle1.x, 11);
    test.equal(particle1.y, 22);
    test.equal(particle1.dx, 1);
    test.equal(particle1.dy, 2);
}
