const brain = require("brain.js");
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

network.train(trainingData, {
    iterations: 2000
});

const output = network.run('I Fixed the power supply');

console.log(`Category: ${output}`);