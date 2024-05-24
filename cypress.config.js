const { defineConfig } = require("cypress");
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit.mate.academy/',
    setupNodeEvents(on, config) {
      on('task', { 
        generateUser() {
          const randomNumber = Math.random().toString().slice(2,6);
           return {
            username: faker.person.firstName() + randomNumber,
            email: (faker.internet.email()).toLowerCase(),
            password: "mytestpassword",
          }
        },
        
        generateUpdateData() {
          const randomNumber = Math.floor(Math.random(1000) * 1000, 3);
          return {
            newUsername: faker.person.firstName() + randomNumber,
            newBio: faker.lorem.word(),
            newEmail: (faker.internet.email()).toLowerCase(),
            newPassword: 'testing1234@'
          }
        }
      });
    },
  }
});
