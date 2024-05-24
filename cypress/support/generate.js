const { faker } = require('@faker-js/faker');

function generateUser() {
    const randomNumber = Math.random().toString().slice(2, 6);
    const randomUsername = faker.internet.userName() + "_" + randomNumber;
    const randomEmail = randomUsername + "@gmail.com";
    const password = "mytestpassword";
    const invalidEmail = randomUsername + "mail.com";
    const shortPassword = "1f";
    const wrongPassword = "wrongpassword";
    const nonRegisteredEmail = "nonRegisteredEmail@gmail.com";

    return {
        randomUsername,
        randomEmail,
        password,
        shortPassword,
        invalidEmail,
        invalidUsername: randomUsername,
        wrongPassword,
        nonRegisteredEmail
    };
}

module.exports = { generateUser };
