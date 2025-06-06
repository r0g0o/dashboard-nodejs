require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');

const router = express.Router();

// Configuración de conexión MySQL usando variables de entorno
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Helper para consultas
async function queryTable(table) {
  const [rows] = await pool.query(`SELECT * FROM \`${table}\``);
  return rows;
}

router.get('/users', async (req, res) => {
  try {
    const users = await queryTable('users');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

router.get('/posts', async (req, res) => {
  try {
    const posts = await queryTable('posts');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener posts' });
  }
});

router.get('/todos', async (req, res) => {
  try {
    const todos = await queryTable('todos');
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener todos' });
  }
});

router.get('/albums', async (req, res) => {
  try {
    const albums = await queryTable('albums');
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener álbumes' });
  }
});

module.exports = router;