let users = [];
let currentId = 1;

export function createUser(req, res) {
  const { username, age, email, password } = req.body;
  const newUser = { id: currentId++, username, age, email, password };
  users.push(newUser);
  res.status(201).json({ id: newUser.id });
}

export function getUser(req, res) {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const { email, password, ...userWithoutSensitive } = user;
  res.json(userWithoutSensitive);
}

export function updateUser(req, res) {
  const { id } = req.params;
  const { username, age } = req.body;
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (username) user.username = username;
  if (age) user.age = age;
  res.json(user);
}
