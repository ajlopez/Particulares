

function createParticle(x, y, dx, dy) {
    if (!dx)
        dx = 0;
    if (!dy)
        dy = 0;
        
    return { x: x, y: y, dx: dx, dy: dy };
}

module.exports = {
    createParticle: createParticle
}