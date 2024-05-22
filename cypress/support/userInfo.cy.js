function UserInfo() {
    const randomNumber = Math.random().toString().slice(2);
    const userName = `alex${randomNumber}`;
    const userEmail = `qaalex100@gmail.com`;
    const userPassword = `!@#Qtv`;
    const articleBody = `a`;
    const articleDescription = `a`;
    const articleTitle = `a`;
    const articleTags = `a`;
  
    return { userEmail, userPassword, articleBody, articleDescription, articleTitle, articleTags};
  }
  
  module.exports = { UserInfo };