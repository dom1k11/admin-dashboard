import app from './app';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  const db_url = process.env.DATABASE_URL;
  console.log('JWT_SECRET:', process.env.JWT_SECRET);
  console.log('DATABASE_URL:', process.env.DATABASE_URL);
});
