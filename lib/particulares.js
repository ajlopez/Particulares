
var particulares = (function() {
    function Spring(particle1, particle2, distance, force) {
        this.particle1 = particle1;
        this.particle2 = particle2;
        this.distance = distance;
        this.force = force;
    }
    
    Spring.prototype.getForce = function () {
        var dx = this.particle2.x - this.particle1.x;
        var dy = this.particle2.y - this.particle1.y;
        
        var pdistance = Math.sqrt(dx * dx + dy * dy);
        var distance = pdistance - this.distance;
        var force = distance * this.force;
        
        if (dy == 0)
            return { fx: force, fy: 0 };
        
        if (dx == 0)
            return { fx: 0, fy: force };
            
        var angle = Math.atan2(dy, dx);
        
        return { fx: Math.sin(angle) * force, fy: Math.cos(angle) * force };
    };
    
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
        
        this.springs = [];
    }
    
    Particle.prototype.spring = function (particle, distance, force) {
        this.springs.push(new Spring(this, particle, distance, force));
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
            
        for (var n in this.springs) {
            var force = this.springs[n].getForce();
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
