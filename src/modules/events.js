function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener)
}

Emitter.prototype.emmit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

Emitter.prototype.sayHello = function(message) {
    console.log(message)
}

module.exports = new Emitter();