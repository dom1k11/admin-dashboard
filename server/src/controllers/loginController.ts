import { controller } from '../utils/controllerWrapper';
import { findUserByName } from '../queries/login';
import { validatePassword } from '../services/authService';
import { generateToken } from '../services/jwtService';

export const handleLogin = controller(async (req, res) => {
  const { name, password } = req.body;

  const user = await findUserByName(name);
  if (!user) return res.status(400).json({ error: 'User not found' });

  if (!(await validatePassword(password, user.password)))
    return res.status(401).json({ error: 'Invalid password' });

  if (user.status !== 'active')
    return res.status(403).json({ error: 'Account not active' });

  res.json({
    message: 'User logged in.',
    user,
    token: generateToken(user.id),
  });
});
