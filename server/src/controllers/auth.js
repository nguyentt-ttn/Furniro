import { loginSchema, registerSchema } from "../schemas/auth";
import User from "../models/auth";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const { error } = registerSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessage = error.details.map((message) => message.message);
    return res.status(400).json({ message: errorMessage });
  }
  const existUser = await User.findOne({ email: email });
  if (existUser) {
    return res.status(409).json({ message: "Email đã tồn tại, vui lòng đăng ký lại bằng email khác" });
  }
  const existUsername = await User.findOne({ username: username });
  if (existUsername) {
    return res.status(409).json({ message: "Username đã tồn tại, vui lòng chọn username khác!" });
  }
  const handlePassword = await bcryptjs.hash(password, 10);
  const data = await User({
    username,
    email,
    password: handlePassword,
    role: "member",
  }).save();
  res.status(201).json({ mesage: "Đăng ký thành công", data });
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessage = error.details.map((message) => message.message);
    return res.status(400).json({ message: errorMessage });
  }
  const existUser = await User.findOne({ email: email });
  if (!existUser) {
    return res.status(404).json({ message: "Email không tồn tại" });
  }
  const validPassword = await bcryptjs.compare(password, existUser.password);
  if (!validPassword) {
    return res.status(401).json({ message: "Mật khẩu không đúng" });
  }
  const token = jwt.sign(
    { id: existUser._id, role: existUser.role },
    "123456",
    { expiresIn: "1h" }
  );
  res.cookie("token", token, { httpOnly: true });
  res.status(200).json({ accessToken: token, user: existUser });
};
export const UserList = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error)
  }

}
