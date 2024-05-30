// const token = "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
const API_URL_USER = "https://wedev-api.sky.pro/api/user";
const API_URL = "https://wedev-api.sky.pro/api/kanban";
export async function login({ login, password }) {
  const response = await fetch(API_URL_USER + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Не верный логин или пароль");
  }

  const data = await response.json();
  return data;
}

export async function signup({ name, login, password }) {
  const response = await fetch(API_URL_USER, {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Пользователь с таким именем существует");
  }

  const data = await response.json();
  return data;
}

export async function getTasks({ token }) {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка");
  }

  const data = await response.json();
  return data;
}
