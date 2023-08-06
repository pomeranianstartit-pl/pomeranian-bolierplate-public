const { faker } = require('@faker-js/faker');
 
const generator = () => {
  const generateUser = () => {
    const [name, surname] = [faker.person.firstName(), faker.person.lastName()];
    return {
      name,
      surname,
      avatar: faker.image.avatarGitHub(),
      id: faker.database.mongodbObjectId(),
      email: faker.internet.email({ firstName: name, lastName: surname }),
      phone: faker.phone.number('+48 #########'),
    };
  };
 
  let data = {
    users: Array(100)
      .fill({})
      .map((obj) => generateUser()),
  };
 
  return data;
};
 
module.exports = generator;