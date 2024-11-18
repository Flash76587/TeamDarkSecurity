
    // Function to generate a password (add your logic here)
    function generatePassword() {
      const length = document.getElementById('length').value;
      const includeUppercase = document.getElementById('includeUppercase').checked;
      const includeNumbers = document.getElementById('includeNumbers').checked;
      const includeSymbols = document.getElementById('includeSymbols').checked;

      const lowercase = 'abcdefghijklmnopqrstuvwxyz';
      const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
      const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

      let characters = lowercase;
      if (includeUppercase) characters += uppercase;
      if (includeNumbers) characters += numbers;
      if (includeSymbols) characters += symbols;

      let password = '';
      for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      document.getElementById('password').value = password;
    }

    // Function to copy the password to the clipboard
    function copyPassword() {
      const passwordField = document.getElementById('password');
      passwordField.select();
      passwordField.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand('copy');

      // Optional: Alert the user
      alert('Password copied to clipboard!');
    }
