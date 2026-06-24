const express = require('express');
const pessoas = require('./pessoasRoute.js');
const categorias = require('./categoriasRoutes.js')
const cursos = require('./cursosRoutes.js')

module.exports = app =>{
    app.use(
        express.json(), //converter para json o que chega como string
        pessoas,
        categorias,
        cursos,
    );
}