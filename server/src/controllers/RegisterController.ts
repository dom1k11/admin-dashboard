import { registerUser } from '../queries/registration.js';
import { controller } from '../utils/controllerWrapper.js';
import { sendVerificationEmail } from '../utils/mailer.js';
import { hashPassword } from '../services/hashService.js';
import { generateAndSaveToken } from '../services/verifyTokenService.js';
export const handleRegister = controller(async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await hashPassword(password);

  const result = await registerUser({
    name,
    email,
    password: hashedPassword,
  });

  const user = result.rows[0];
  const token = await generateAndSaveToken(user.id);

  sendVerificationEmail(user.email, token).catch(err =>
    console.error("Email send error:", err)
  );

  res.json({ message: "User registered. Verification email scheduled.", user });
});
