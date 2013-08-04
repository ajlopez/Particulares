
function Particle(x, y, dx, dy) {
    if (!x)
        x = 0;
        
    if (!y)
        y = 0;
        
    if (!dx)
        dx = 0;
    if (!dy)
        dy = 0;
        
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
}

Particle.prototype.move = function () {
    this.x += this.dx;
    this.y += this.dy;
}

function createParticle(x, y, dx, dy) {
    return new Particle(x, y, dx, dy);
}

module.exports = {
    createParticle: createParticle
}