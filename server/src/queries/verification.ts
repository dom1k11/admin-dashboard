import pool from '../db';

export async function markUserVerified(userId: number) {
  const result = await pool.query(
    "UPDATE users SET status = 'verified' WHERE id = $1 RETURNING *",
    [userId],
  );
  return result.rows[0];
}

export async function findUserByToken(token: string) {
  const result = await pool.query(
    'SELECT * FROM verification_tokens WHERE token = $1',
    [token],
  );
  return result.rows[0] || null;
}

export async function deleteToken(token: string) {
  const result = await pool.query(
    'DELETE FROM verification_tokens WHERE token = $1 RETURNING *',
    [token],
  );
  return result.rows[0] || null;
}

export async function saveVerificationToken(userId: number, token: string) {
  const result = await pool.query(
    'INSERT INTO verification_tokens (user_id, token) VALUES ($1, $2) RETURNING *',
    [userId, token],
  );
  return result.rows[0];
}
