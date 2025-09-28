import pool from '../db';

export async function getAllUsers() {
  return pool.query('SELECT * FROM users ORDER BY last_login DESC');
}

export async function deleteUsers(id: number[]) {
  if (!id.length) return;
  const query = `DELETE FROM users WHERE id = ANY($1)`;
  return pool.query(query, [id]);
}

export async function deleteUnverifiedUsers() {
  const query = `DELETE FROM users WHERE status = 'unverified' RETURNING *`;
  return pool.query(query);
}




export async function blockUser(id: number) {
  return pool.query(
    `UPDATE users SET status = 'blocked' WHERE id = $1 RETURNING *`,
    [id],
  );
}

export async function unblockUser(id: number) {
  return pool.query(
    `UPDATE users SET status = 'active' WHERE id = $1 RETURNING *`,
    [id],
  );
}



export async function verifyUser(id: number) {
  return pool.query(
    `UPDATE users SET status = 'active' WHERE id = $1 AND status = 'unverified' RETURNING *`,
    [id],
  );
}
