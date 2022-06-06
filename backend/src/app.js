const express = require('express');
const initLoaders = require('./loaders');

const startServer = () => {
    const app = express();

    initLoaders(app);
}

startServer(); 