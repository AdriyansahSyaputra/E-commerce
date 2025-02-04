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
  const newUser = {
    username: user.username,
    email: user.email,
    password: user.password,
    phone: user.phone,
    profilePicture: "default.jpg",
  };
  localStorage.setItem("users", JSON.stringify([...users, newUser]));
};

// logic untuk login
export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  // Buat token untuk user yang sedang login
  const token = uuidv4();

  if (user) {
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("token", JSON.stringify(token));
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

// Update data user (username, password, phone, dan foto)
export const updateUser = (updatedUser) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = JSON.parse(sessionStorage.getItem("user"));

  if (!currentUser) {
    throw new Error("No user is logged in");
  }

  const userIndex = users.findIndex((user) => user.email === currentUser.email);
  if (userIndex === -1) {
    throw new Error("User not found");
  }

  // Update data user
  const updatedData = {
    ...users[userIndex],
    username: updatedUser.username || users[userIndex].username,
    password: updatedUser.password || users[userIndex].password,
    phone: updatedUser.phone || users[userIndex].phone,
    profilePicture:
      updatedUser.profilePicture || users[userIndex].profilePicture,
  };

  users[userIndex] = updatedData;

  // Simpan perubahan ke Local Storage
  localStorage.setItem("users", JSON.stringify(users));

  // Update sesi user yang sedang login
  sessionStorage.setItem("user", JSON.stringify(updatedData));
};
