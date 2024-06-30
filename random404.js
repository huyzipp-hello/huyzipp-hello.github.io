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
  const randomString = generateRandomString(100); // Changed length to 100
  const fullUrl = baseUrl + randomString;
  const linkElement = document.getElementById('random-link');
  linkElement.href = fullUrl;
  linkElement.innerText = fullUrl;
}

window.onload = displayRandomLink;