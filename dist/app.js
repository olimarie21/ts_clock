"use strict";
console.log('test');
class Clock {
    constructor() {
        this.time = new Date();
    }
    getTime() {
        const clock = document.getElementById("clock");
        if (clock) {
            clock.innerHTML = this.time.toLocaleTimeString();
        }
    }
    resetTime() {
        this.time = new Date();
        this.getTime();
    }
}
let currTime = new Clock();
currTime.getTime();
setInterval(() => {
    currTime.resetTime();
}, 1000);
