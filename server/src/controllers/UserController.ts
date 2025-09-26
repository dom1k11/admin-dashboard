import { getAllUsers } from '../queries/users';
import { controller } from '../utils/controllerWrapper';

export const handleGetUsers = controller(async (req, res) => {
  const result  = await getAllUsers();
  res.json(result.rows);
});
