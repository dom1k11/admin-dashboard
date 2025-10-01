import pool from '../db';
export async function findUserByName(name: string) {
  const result = await pool.query('SELECT * FROM users WHERE name = $1', [
    name,
  ]);
  return result.rows[0] || null;
}

export async function updateLastLogin(id: number) {
  const result = await pool.query(
    `UPDATE users 
     SET last_login = NOW() AT TIME ZONE 'Europe/Vilnius'
     WHERE id = $1 
     RETURNING *`,
    [id],
  );
  return result.rows[0];
}
