const users = [];

const createUser = (req, res) => {
  //   const  { name, age, email, password } = req.body
  const user = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
  };

  users.push(user);

  res.status(201).json(user);
};

export default createUser;
