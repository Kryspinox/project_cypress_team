const { faker }  = require ("@faker-js/faker");

function generateUser() {
const randomNumber = Math.random().toString().slice(2,6);
const username = faker.person.firstName() + "_" + randomNumber;
const email = (randomUsername + "@gmail.com").toLowerCase();
const password = "mytestpassword";

return {username, email, password};
};

module.exports = {generateUser};