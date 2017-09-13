const path = require('path');

module.exports = {
    entry: './app/js/app.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    }
};
