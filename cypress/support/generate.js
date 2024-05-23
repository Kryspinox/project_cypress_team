const { faker }  = require ("@faker-js/faker");

function generateUser() {
const randomNumber = mathRandom().toString().slice(2,6);
const randmUsername = faker.internet.username() + "_" + randomNumber;
const randomEmail = username = "@gmail.com";
const password = "mytestpassword";
const invalidEmail = username + "mail.com";
const shortPassword = "1f";
const wrongPassword = "wrongpassword"

return {randmUsername, randomEmail, password, shortPassword, invalidEmail, invalidUsername, wrongPassword};
};

module.exports = {generateUser};
