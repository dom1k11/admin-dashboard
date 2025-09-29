import pool from '../db';
export async function findUserByName(name: string) {
  const result = await pool.query('SELECT * FROM users WHERE name = $1', [
    name,
  ]);
  return result.rows[0] || null;
}
