import { getAllUsers, deleteUsers } from '../queries/users';
import { controller } from '../utils/controllerWrapper';

export const handleGetUsers = controller(async (req, res) => {
  const result = await getAllUsers();
  res.json(result.rows);
});

export const handleDeleteUsers = controller(async (req, res) => {
  const { id } = req.body;
  if (!Array.isArray(id) || !id.length) {
    res.status(400).json({ error: 'id array required' });
    return;
  }

  const result = await deleteUsers(id);
  if (!result) {
    res.status(500).json({ error: 'Failed to delete users' });
    return;
  }
  res.json(result.rows);
});
