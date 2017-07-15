function Rectangle(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
};

