function Effects() {
    this.element = "";
}

Effects.prototype.setElement = function(element) {
    this.element = document.querySelector(element);
}

Effects.prototype.textColor = function(color) {
    this.element.style.color = color;
}

Effects.prototype.animate = function(css, duration, delay) {

}

module.exports = new Effects();