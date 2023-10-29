const area = shape => params => {
    if(shape === 'circle') {
        return 3.14*params.radius**2;
    } else if (shape === 'rectangle') {
        return params.width*params.length;
    }
}

const shapeCalc = shape => params => {
    const calcArea = area(shape);
    return calcArea(params);
}

const circleCalculator = shapeCalc('circle');
const circleRadius = { radius:2 };

console.log(circleCalculator(circleRadius));
