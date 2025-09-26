import pool from '../db';

export async function getAllUsers() {
  return pool.query('SELECT * FROM users ORDER BY last_login DESC');
}
