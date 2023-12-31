const myForm = document.getElementById('sign-up-form');
onsole.log("IN signupp.js file");
myForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    console.log("Signup  button clicked",name);
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    console.log("name in signup.js",name);

    try {
        const res = await axios.post(`http://localhost:4000/user/sign-up`, 
        {
            name: name.value, 
            email: email.value, 
            password: password.value
        }
        );
        console.log('SIGN UP RESPONSE: ', res);
        if(res.status === 200){
            name.value = '';
            email.value = '';
            password.value = '';
            clearError();
            window.location.href = 'login.html';
        }
        
    } catch (error) {
        logErrorToUser(error);
        if(error.response.status === 400) {
            alert('User already exists!');
        }
        console.log(error);
    }
});

function logErrorToUser(error) {
    const err = document.getElementById('error-text');
    err.innerHTML = error.message;
};

function clearError() {
    const err = document.getElementById('error-text');
    err.innerHTML = '';
};