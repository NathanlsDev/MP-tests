const searchInput = "ana";

const users = [
  { name: "João", age: 30, email: "joao@example.com" },
  { name: "Maria", age: 25, email: "maria@example.com" },
  { name: "Pedro", age: 35, email: "pedro@example.com" },
  { name: "Ana", age: 28, email: "ana@example.com" },
  { name: "Carlos", age: 32, email: "carlos@example.com" },
];

const research = (array, inputValue) => {
  const validInput = validateInput(inputValue);

  const errorMsg = `"${validInput}" not found.`;

  const findUser = new Promise((resolve, reject) => {
    const userFound = array
      .find(user => Object.values(user)
        .some(value => (typeof value === "string" || typeof value === "number") && normalizeString(String(value))
          .includes(normalizeString(validInput))
        )
      );
    return userFound ? resolve(userFound) : reject(errorMsg);
  });

  findUser
    .then(console.log)
    .catch(console.log);
};

const validateInput = inputValue => {
  const pattern = /^[a-zA-Z0-9@.\sÀ-ÿ]+$/;
  const stringInput = String(inputValue).trim();
  const validation = pattern.test(stringInput);

  if (!validation) {
    throw new Error(
      "Input type is invalid! It must be a string or number type, and cannot contain special characters."
    );
  }
  return stringInput;
};

const normalizeString = string =>
  string.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

research(users, searchInput);
