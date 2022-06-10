const express = require('express');
const api = require('../api');
const cors = require('cors');

module.exports = (app) => {
    app.use(express.json());
    app.use(cors())
    app.use('/', api);

    app.listen(3000, () => {
        console.log(`Server is running on port 3000`);
    });

    return app;
}