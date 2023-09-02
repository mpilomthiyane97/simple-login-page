// Array to simulate registered users' data
let registeredUsers = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");
  var loginMessage = document.getElementById("loginMessage");

  // Reset error messages
  usernameError.textContent = "";
  passwordError.textContent = "";
  loginMessage.textContent = "";

  // Check if the username and password match any registered user
  const foundUser = registeredUsers.find(
    (user) => user.username === username && user.password === password
  );

  if (foundUser) {
    showSuccessMessage("Login successful!");
    return false; // Prevent form submission
  } else {
    showLoginErrorMessage("Wrong username or password. Please try again.");
    return false; // Prevent form submission
  }
}

function createAccount() {
  var newUsername = document.getElementById("newUsername").value;
  var newPassword = document.getElementById("newPassword").value;
  var newUsernameError = document.getElementById("newUsernameError");
  var newPasswordError = document.getElementById("newPasswordError");
  var createAccountMessage = document.getElementById("createAccountMessage");

  // Reset error messages
  newUsernameError.textContent = "";
  newPasswordError.textContent = "";
  createAccountMessage.textContent = "";

  // Validate new username and password
  if (validateUsername(newUsername) && validatePassword(newPassword)) {
    // Check if the new username is already taken
    const usernameTaken = checkUsernameExists(newUsername);

    if (usernameTaken) {
      showCreateAccountErrorMessage("Username already taken. Please choose a different one.");
    } else {
      // Create a new user account and add it to the registeredUsers array
      saveNewUser(newUsername, newPassword);
      showCreateAccountSuccessMessage("Account created successfully!");
      clearCreateAccountForm(); // Clear the form fields
      return false; // Prevent form submission
    }
  } else {
    if (!validateUsername(newUsername)) {
      showCreateAccountErrorMessage("Username must be at least 4 characters long.");
    }
    if (!validatePassword(newPassword)) {
      showCreateAccountErrorMessage("Password must be at least 6 characters long.");
    }
    return false; // Prevent form submission
  }
}


function validateUsername(username) {
  return username.trim().length >= 4;
}

function validatePassword(password) {
  return password.trim().length >= 6;
}

function checkUsernameExists(username) {
  return registeredUsers.some((user) => user.username === username);
}

function saveNewUser(username, password) {
  registeredUsers.push({ username, password });
}

function showLoginErrorMessage(message) {
  var loginMessage = document.getElementById("loginMessage");
  loginMessage.textContent = message;
  loginMessage.className = "error-message";
}

function showCreateAccountErrorMessage(message) {
  var createAccountMessage = document.getElementById("createAccountMessage");
  createAccountMessage.textContent = message;
  createAccountMessage.className = "error-message";
}

function showSuccessMessage(message) {
  var loginMessage = document.getElementById("loginMessage");
  loginMessage.textContent = message;
  loginMessage.className = "success-message";
}

function showCreateAccountSuccessMessage(message) {
  var createAccountMessage = document.getElementById("createAccountMessage");
  createAccountMessage.textContent = message;
  createAccountMessage.className = "success-message";
}
