import { v4 as uuidv4 } from "uuid";

// Simpan data user ke Local Storage
export const registerUser = (user) => {
  let users = [];
  try {
    const storedUsers = localStorage.getItem("users");
    users = storedUsers ? JSON.parse(storedUsers) : [];
  } catch (error) {
    console.log("Error parsing user", error);
    users = [];
  }

  // Validasi jika sudah ada email yang sama
  const existingUser = users.find((u) => u.email === user.email);
  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Simpan new user
  const newUser = { username: user.username ,email: user.email, password: user.password, phone: user.phone };  
  localStorage.setItem("users", JSON.stringify([...users, newUser]));
};

// logic untuk login
export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  // Buat token untuk user yang sedang login
  const token = uuidv4();

  if (user) {
    sessionStorage.setItem("user", JSON.stringify({ ...user, token }));
    return user;
  } else {
    throw new Error("Invalid email or password");
  }
};

export const logoutUser = () => {
  sessionStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("token"));
};
