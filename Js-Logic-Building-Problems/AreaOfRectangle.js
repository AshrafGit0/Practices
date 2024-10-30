function RectangleArea(length, width) {
    let area = length * width;
    if (length <= 0) {
        throw new Error("Length should be a positive integer")
    }
    if (width <= 0) {
        throw new Error("Width should be a positive integer")
    }
    return area;
}
console.log(RectangleArea(-3, 5))