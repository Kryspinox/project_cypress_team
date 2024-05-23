const { defineConfig } = require("cypress");
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit.mate.academy/',
    setupNodeEvents(on, config) {
      on('task', {        
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
  },
});
