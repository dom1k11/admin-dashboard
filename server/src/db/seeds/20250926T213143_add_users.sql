-- SQL seed
INSERT INTO users (name, email, password, status, last_login)
VALUES
  ('Alice Smith', 'alice@example.com', 'hashed_password1', 'active', NOW() - INTERVAL '5 minutes'),
  ('Bob Johnson', 'bob@example.com', 'hashed_password2', 'blocked', NOW() - INTERVAL '10 minutes'),
  ('Charlie Brown', 'charlie@example.com', 'hashed_password3', 'active', NOW() - INTERVAL '1 hour'),
  ('Diana Prince', 'diana@example.com', 'hashed_password4', 'unverified', NOW() - INTERVAL '2 days'),
  ('Evan Wright', 'evan@example.com', 'hashed_password5', 'blocked', NOW() - INTERVAL '5 days');
