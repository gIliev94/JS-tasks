function createCounter() {
    var counter = new Counter();
    return console.log('New counter created!');
}

function Counter() {
    this.counterInterval;
    return this.init();
}

Counter.prototype.getValue = function () {
    return parseInt(this.inputField.value);
};

Counter.prototype.setValue = function (value) {
    this.inputField.value = value;
    return this;
};

Counter.prototype.increment = function () {
    this.setValue(this.sum(parseInt(this.getValue() || 0), 1));
    return this;
};

Counter.prototype.sum = function (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        console.log('Invalid input!');
    }
    return num1 + num2;
};

Counter.prototype.stop = function stop() {
    clearInterval(this.counterInterval);
    return console.log('Counter stopped!');
};

Counter.prototype.start = function () {
    this.counterInterval = setInterval(this.increment.bind(this), 1000);
    return console.log('Counter started!');
};

Counter.prototype.init = function () {
    this.createContent();
    this.appendContent();

    return this;
};

Counter.prototype.createContent = function () {
    this.inputField = document.createElement('input');
    this.inputField.type = 'text';

    this.startButton = document.createElement('button');
    this.startButton.innerHTML = 'start';

    this.stopButton = document.createElement('button');
    this.stopButton.innerHTML = 'stop';

    this.lineBreaker = document.createElement('p');

    return this;
};

Counter.prototype.appendContent = function () {
    this.contentContainer = document.getElementById('container');

    this.contentContainer.appendChild(this.inputField);
    this.contentContainer.appendChild(this.startButton);
    this.contentContainer.appendChild(this.stopButton);
    this.contentContainer.appendChild(this.lineBreaker);

    this.contentContainer.addEventListener('click', this.clickHandler.bind(this));

    return this;
};

Counter.prototype.clickHandler = function (e) {
    this.clickedItem = e.target;

    if (this.clickedItem == this.startButton) {
        this.start();
    }

    if (this.clickedItem == this.stopButton) {
        this.stop();
    }

    return this.clickedItem;
};
