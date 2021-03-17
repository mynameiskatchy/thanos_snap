disintegrate.init()

document.getElementById('img').addEventListener('click', e => {
    const disObj = disintegrate.getDisObj(e.target)
    disintegrate.createSimultaneousParticles(disObj)
    e.target.remove() 
})

// function for particles to move to my liking
const thanosSnap = function () {
    this.name = 'ThanosSnap'
    this.animationDuration = 1500

    this.size = 3
    this.speedX = Math.random()
    this.speedY = Math.random() * -1 // move up and to right

    this.first = true // track first time function is run

    // applied to each particle
    this.draw = (ctx, percentComplete) => {
        if (this.first) {
            this.startX += (Math.random() - 0.5) * 10
            this.startY += (Math.random() - 0.5) * 10
            this.first = false
        }

        // start drawing rectangles on our screen
        ctx.beginPath()
        // create a rectangle and define dimensions 
        ctx.fillRect(this.startX - this.size / 2, this.startY - this.size / 2, this.size, this.size)
        // set colour of rectangle
        const r = this.rgbArray[0]
        const g = this.rgbArray[1]
        const b = this.rgbArray[2]
        // make squares more and more transpartent
        const a = 1 - percentComplete // based on how far animation is completed (starts at 0 ends at 1)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
        // draw for us
        ctx.fill()
        // increment acceleration of particles
        this.speedX *= 1.07
        this.speedY *= 1.07
        this.size *= 0.95
        // move pixels more and more to right as time goes on
        this.startX += this.speedX
        this.startY += this.speedY
        
    }
}

disintegrate.addParticleType(thanosSnap)