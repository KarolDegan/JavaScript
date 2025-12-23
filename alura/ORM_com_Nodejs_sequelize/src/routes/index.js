const express = require('express');
const pessoas = require('./pessoasRoute.js');

module.exports = app =>{
    app.use(
        express.json(), //converter para json o que chega como string
        pessoas,
    );
}