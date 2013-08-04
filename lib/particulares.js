
var particulares = (function() {
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

    Particle.prototype.move = function (forces, options) {
        if (!Array.isArray(forces)) {
            options = forces;
            forces = null;
        }
        
        if (forces)
            for (var n in forces) {
                var force = forces[n];
                this.dx += force.fx;
                this.dy += force.fy;
            }
    
        this.x += this.dx;
        this.y += this.dy;
        
        if (options && options.box) {
            while (true) {
                if (this.x < options.box.left) {
                    this.x = options.box.left + (options.box.left - this.x);
                    this.dx = -this.dx;
                    continue;
                }
                
                if (this.x > options.box.right) {
                    this.x = options.box.right - (this.x - options.box.right);
                    this.dx = -this.dx;
                    continue;
                }
                
                if (this.y < options.box.top) {
                    this.y = options.box.top + (options.box.top - this.y);
                    this.dy = -this.dy;
                    continue;
                }
                
                if (this.y > options.box.bottom) {
                    this.y = options.box.bottom - (this.y - options.box.bottom);
                    this.dy = -this.dy;
                    continue;
                }
                
                break;
            }
        }
    }
    
    function createParticle(x, y, dx, dy) {
        return new Particle(x, y, dx, dy);
    }

    return {
        createParticle: createParticle
    }
})();

if (typeof module !== 'undefined' && module && module.exports)
    module.exports = particulares;
