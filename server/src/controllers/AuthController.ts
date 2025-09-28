import bcrypt from 'bcrypt';

import { registerUser } from '../queries/authentication.js';
import { controller } from '../utils/controllerWrapper';

export const handleRegister = controller(async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await registerUser({
    name: name,
    email: email,
    password: hashedPassword,
  });
  res.json(result.rows);
});
