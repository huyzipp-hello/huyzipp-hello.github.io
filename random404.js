function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
  }
  return result;
}

function displayRandomLink() {
  const baseUrl = 'huyzipp-hello.github.io/';
  const randomString = generateRandomString(100); // Length of 100 characters
  const fullUrl = baseUrl + randomString;
  const linkElement = document.getElementById('random-link');
  linkElement.href = 'https://' + fullUrl; // Ensure the URL is valid by adding 'https://'
  linkElement.innerText = fullUrl;
}

window.onload = displayRandomLink;