const subjects = [];

const createsubject = (req, res) => {
  //   const  { name, age, email, password } = req.body
  const subject = {
    id: subject.length + 1,
    name: req.body.name,
  };

  users.push(subject);

  res.status(201).json(subject);
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
