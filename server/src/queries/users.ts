import pool from '../db';

export async function getAllUsers() {
  return pool.query('SELECT * FROM users ORDER BY last_login DESC');
}

export async function deleteUsers(id: number[]) {
  if (!id.length) return { rows: [], rowCount: 0 } as any;
  const query = `DELETE FROM users WHERE id = ANY($1) RETURNING *`;
  return pool.query(query, [id]);
}

export async function deleteUnverifiedUsers() {
  const query = `DELETE FROM users WHERE status = 'unverified' RETURNING *`;
  return pool.query(query);
}

export async function blockUsers(id: number[]) {
  if (!id.length) return { rows: [], rowCount: 0 } as any;
  const query = `UPDATE users
                 SET status = 'blocked'
                 WHERE id = ANY($1)
                 RETURNING *`;
  return pool.query(query, [id]);
}

export async function unblockUsers(id: number[]) {
  if (!id.length) return { rows: [], rowCount: 0 } as any;
  const query = `UPDATE users
                 SET status = 'active'
                 WHERE id = ANY($1)
                 RETURNING *`;
  return pool.query(query, [id]);
}

export async function verifyUser(id: number) {
  return pool.query(
    `UPDATE users SET status = 'active' WHERE id = $1 AND status = 'unverified' RETURNING *`,
    [id],
  );
}
