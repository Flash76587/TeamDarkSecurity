// script.js

// Buttons
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');

// Fields
const inputText = document.getElementById('inputText');
const key = document.getElementById('key');
const outputText = document.getElementById('outputText');

// Encrypt Function
encryptBtn.addEventListener('click', () => {
  const plaintext = inputText.value;
  const secretKey = key.value;

  if (plaintext && secretKey) {
    const ciphertext = CryptoJS.AES.encrypt(plaintext, secretKey).toString();
    outputText.value = ciphertext;
  } else {
    alert('Please provide text and a key for encryption.');
  }
});

// Decrypt Function
decryptBtn.addEventListener('click', () => {
  const ciphertext = inputText.value;
  const secretKey = key.value;

  if (ciphertext && secretKey) {
    try {
      const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);

      if (originalText) {
        outputText.value = originalText;
      } else {
        alert('Invalid key or text.');
      }
    } catch (error) {
      alert('Error during decryption. Please check your inputs.');
    }
  } else {
    alert('Please provide text and a key for decryption.');
  }
});


// Create the fluid wave background dynamically
let wave = document.createElement('div');
wave.classList.add('wave');
document.body.appendChild(wave);
