import pool from '../db';

export async function registerUser(user: NewUser) {
  const query = `
    INSERT INTO users (name, email, password, status, last_login)
    VALUES ($1, $2, $3, 'unverified', null)
    RETURNING *;
  `;
  const values = [user.name, user.email, user.password];
  return pool.query(query, values);
}
