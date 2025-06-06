const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'api', file), 'utf-8'));
}

router.get('/users', (req, res) => {
  try {
    const users = readJson('users.json');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

router.get('/posts', (req, res) => {
  try {
    const posts = readJson('posts.json');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener posts' });
  }
});

router.get('/todos', (req, res) => {
  try {
    const todos = readJson('todos.json');
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener todos' });
  }
});

router.get('/albums', (req, res) => {
  try {
    const albums = readJson('albums.json');
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener álbumes' });
  }
});

module.exports = router;