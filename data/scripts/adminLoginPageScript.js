
sessionStorage.clear();

function login() {
    console.log("Login function called"); // Debugging step
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var text = document.getElementById('iscorrect');
    /*text.style = 'color: blue;';
    text.innerHTML = 'Checking...';*/

    console.log("Username: " + username); // Debugging step
    console.log("Password: " + password); // Debugging step
    
    if (username in data) {
        if (data[username] === password) {
            text.innerHTML = 'Correct. Logging you on...';
            text.style.color = 'green';
            sessionStorage.setItem('gone-through-login-page', 'true');
            let id = unametoid[username]
            window.location.replace('/login/loginservice?accountID=' + id);
        } else {
            text.innerHTML = 'Incorrect username or password.';
            text.style.color = 'red';
        }
    } else {
        text.innerHTML = 'Incorrect username or password.';
        text.style.color = 'red';
    }

    return false; // Prevent form submission
}
