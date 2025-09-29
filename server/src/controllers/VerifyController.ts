import { controller } from '../utils/controllerWrapper';

import { findUserByToken, deleteToken } from '../queries/verification';
import { markUserVerified } from '../queries/verification';

export const handleVerify = controller(async (req, res) => {
  const { token } = req.params;

  const record = await findUserByToken(token);
  if (!record)
    return res.status(400).json({ error: 'Invalid or expired token' });

  await markUserVerified(record.user_id);
  await deleteToken(token);

  res.json({ message: 'Account verified successfully!' });
});
