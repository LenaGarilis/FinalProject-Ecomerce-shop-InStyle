import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Elena",
    email: "elena@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Korneli",
    email: "korneli@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
