import { controller } from '../utils/controllerWrapper';
import { findUserByName } from '../queries/login';
import { validatePassword } from '../services/authService';
import { generateToken } from '../services/jwtService';
import { updateLastLogin } from '../queries/login';
export const handleLogin = controller(async (req, res) => {
  const { name, password } = req.body;

  const user = await findUserByName(name);
  if (!user) return res.status(400).json({ error: 'User not found' });

  if (!(await validatePassword(password, user.password)))
    return res.status(401).json({ error: 'Invalid password' });

  if (user.status !== 'active')
    return res.status(403).json({ error: 'Account not active' });

  const updatedUser = await updateLastLogin(user.id);

  res.json({
    message: 'User logged in.',
    updatedUser,
    token: generateToken(user.id),
  });
});
