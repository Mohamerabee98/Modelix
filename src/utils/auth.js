// utils/auth.js
export const isLoggedIn = () => {
  return localStorage.getItem("token") ? true : false;
};

export const loginUser = (userData, token) => {
  localStorage.setItem("user", JSON.stringify(userData));
  localStorage.setItem("token", token);
};

export const logoutUser = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};