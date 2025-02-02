class Shape {
    calculateArea(): number {
        return 0; 
    }

    calculatePerimeter(): number {
        return 0; 
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

let rectangle = new Rectangle(5, 10);
let circle = new Circle(7);

console.log("Chu vi hình chữ nhật:", rectangle.calculatePerimeter());
console.log("Chu vi hình tròn:", circle.calculatePerimeter());
