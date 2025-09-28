import pool from '../db';

export async function getAllUsers() {
  return pool.query('SELECT * FROM users ORDER BY last_login DESC');
}

import { QueryResult } from "pg";

export async function deleteUsers(ids: number[]): Promise<QueryResult> {
  if (!ids.length) {
    // пустой результат
    return { rows: [], rowCount: 0 } as QueryResult;
  }
  const query = `DELETE FROM users WHERE id = ANY($1) RETURNING *`;
  return pool.query(query, [ids]);
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
