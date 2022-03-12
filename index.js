// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(newDiameter) {
        this.radius = (newDiameter / 2)
    }

    get diameter() {
        return this.radius * 2
    }


    set area(newArea) {
        this.radius = Math.sqrt((newArea / Math.PI))
    }

    get area() {
        return (this.radius ** 2) * Math.PI
    }
    
    set circumference(newCirc) {
        this.radius = (newCirc / Math.PI) / 2
    }

    get circumference() {
        return (this.radius * 2) * Math.PI
    }



}