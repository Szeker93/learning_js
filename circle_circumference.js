function calculateCircleCircumference(radius) {
    return 2 * 3.14 * radius;
}

function calculateCircleArea(radius) {
    return 3.14 * (radius * radius);
}

function printCircleData(radiusFromUser) {
    let circumference = calculateCircleCircumference(radiusFromUser);
    let area = calculateCircleArea(radiusFromUser);
    console.log('The circumference of the circle is ' + circumference + '  centimetres.');
    console.log('The area of the circle is ' + area + ' square centimeters.');
}
