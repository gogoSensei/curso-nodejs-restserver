const { response } = require('express');

const usuariosGet = (req, res = response) => {
  const { q, nombre = 'No name', apikey, page=1, limit } = req.query;

  res.json({
    msg: 'get API - controller',
    q, 
    nombre, 
    apikey,
    page,
    limit
  });
}

const usuariosPut = (req, res = response) => {
  const id = req.params.id;
  res.status(400).json({
    msg: 'put API - controller',
    id
  });
}

const usuariosPost = (req, res = response) => {
  const {nombre, edad} = req.body;

  res.status(201).json({
    msg: 'post API - controller',
    nombre,
    edad
  });
}

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controller'
  });
}

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete
}
