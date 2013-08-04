
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

Particle.prototype.move = function (options) {
    this.x += this.dx;
    this.y += this.dy;
    
    if (options && options.box) {
        if (this.x < options.box.left) {
            this.x = options.box.left - this.x;
            this.dx = -this.dx;
        }
        
        if (this.x > options.box.right) {
            this.x = options.box.right - (this.x - options.box.right);
            this.dx = -this.dx;
        }
        
        if (this.y < options.box.top) {
            this.y = options.box.top - this.y;
            this.dy = -this.dy;
        }
    }
}

function createParticle(x, y, dx, dy) {
    return new Particle(x, y, dx, dy);
}

module.exports = {
    createParticle: createParticle
}
