CREATE TABLE IF NOT EXISTS verification_tokens (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token VARCHAR(255) NOT NULL UNIQUE,
    expires_at TIMESTAMP NOT NULL DEFAULT NOW() + interval '1 day'
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_verification_token ON verification_tokens(token);
