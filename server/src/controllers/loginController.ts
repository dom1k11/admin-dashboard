import { controller } from '../utils/controllerWrapper.js';
import { findUserByName } from '../queries/login.js';
import bcrypt from 'bcrypt';

export const handleLogin = controller(async (req, res) => {
  const { name, password } = req.body;

  const user = await findUserByName(name);
  if (!user) return res.status(400).json({ error: 'User not found' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid password' });

  if (user.status !== 'verified') {
    return res.status(403).json({ error: 'Account not verified' });
  }

  res.json({ message: 'User logged in.', user });
});
