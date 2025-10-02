import { controller } from '../utils/controllerWrapper';
import { findUserByEmail } from '../queries/login';
import { validatePassword } from '../services/authService';
import { generateToken } from '../services/jwtService';
import { updateLastLogin } from '../queries/login';

export const handleLogin = controller(async (req, res) => {
  
  const { email, password } = req.body;
 
  const user = await findUserByEmail(email);
  if (!user) {
  res.status(400).json({ error: 'User not found' });
  return;
}

if (!(await validatePassword(password, user.password))) {
  res.status(401).json({ error: 'Invalid password' });
  return;
}

if (user.status == 'blocked') {
  res.status(403).json({ error: 'Account not active' });
  return;
}

  const updatedUser = await updateLastLogin(user.id);

  res.json({
    message: 'User logged in.',
    user: updatedUser,
    token: generateToken(user.id),
  });
});
