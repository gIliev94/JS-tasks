// Implementation of a constructor.
function Counter() {
    this.counterInterval;

    return this.init();
}

// Initializes the counter by creating/visualizing the HTML elements.
Counter.prototype.init = function () {
    this.createContent();
    this.appendContent();

    return this;
};

// Generates HTML elements that build a counter. 
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

// Appends generated HTML elements to the master container.
Counter.prototype.appendContent = function () {
    this.masterContainer = document.getElementById('container');

    this.masterContainer.appendChild(this.inputField);
    this.masterContainer.appendChild(this.startButton);
    this.masterContainer.appendChild(this.stopButton);
    this.masterContainer.appendChild(this.lineBreaker);

    this.masterContainer.addEventListener('click', this.clickHandler.bind(this));

    return this;
};

// Handles both the start and the stop button clicks.
Counter.prototype.clickHandler = function (event) {
    this.clickedButton= event.target;

    if (this.clickedButton == this.startButton) {
        console.log('Starting the counter...');
        this.start();
    }

    if (this.clickedButton == this.stopButton) {
        console.log('Stopping the counter...');
        this.stop();
    }

    return this.clickedButton;
};

// Starts the counting
Counter.prototype.start = function () {
    this.counterInterval = setInterval(this.increment.bind(this), 1000);
    console.log('Counting interval: ' + this.counterInterval + ' sec');
    console.log('Counter started!');

    return this;
};

// Stops the counting
Counter.prototype.stop = function stop() {
    clearInterval(this.counterInterval);
    console.log('Stop time: ' + this.inputField.value);
    console.log('Counter stopped!');

    return this;
};

// Incrementing/counting function
Counter.prototype.increment = function () {
    this.currentValue = parseInt(this.getValue() || 0);
    this.nextValue = this.sum(this.currentValue,1);
    this.setValue(this.nextValue);

    return this;
};

// Implementation for incrementing.
Counter.prototype.sum = function (value, step) {
    console.log(value + step);

    return value + step;
};

// Standart getter.
Counter.prototype.getValue = function () {
    return parseInt(this.inputField.value);
};

// Standart setter.
Counter.prototype.setValue = function (value) {
    this.inputField.value = value;

    return this;
};

// Executor function.
function createCounter() {
    var counter = new Counter();

    return console.log('New counter created!');
}