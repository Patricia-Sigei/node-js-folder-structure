const subjects = [];

const createsubject = (req, res) => {
  //   const  { name, age, email, password } = req.body
  const subject = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
  };

  users.push(user);

  res.status(201).json(user);
};

const getUser = (req, res) => {
  res.status(200).json(users);
};

// getting one user
const getById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((i) => i.id === id);
  // error validation
  if (!user) {
    return res.status(400).json({ message: "User not in the record" });
  }
  // returning the user
  res.json(user);
};

export { createUser, getUser, getById };
