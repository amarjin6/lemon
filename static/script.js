$email = document.getElementById('email');
$singUpBtn = document.getElementById('singUpButton');
$passwordSingUp = document.getElementById('passwordSingUp');
$passwordConfirm = document.getElementById('passwordConfirm');
$usernameSingUp = document.getElementById('usernameSingUp');
$emailLogin = document.getElementById('emailLogin');
$passwordLogin = document.getElementById('passwordLogin');
$buttonLogin = document.getElementById('buttonLogin');
$singUpBtn.disabled = true;
$buttonLogin.disabled = true;
$email.addEventListener("change", stateHandle);
$passwordSingUp.addEventListener("change", stateHandle1);
$usernameSingUp.addEventListener("change", stateHandle2);
$emailLogin.addEventListener("change", stateHandle3);
$passwordLogin.addEventListener("change", stateHandle4);

function stateHandle() {
    if (validateEmail($email.value)) {
        $singUpBtn.disabled = false;
    } else {
        $singUpBtn.disabled = true;
    }
}

function stateHandle1() {
    if (validatePassword($passwordSingUp.value)) {
        if ($passwordSingUp.value === $passwordConfirm.value) {
            $singUpBtn.disabled = false;
        }
    } else {
        $singUpBtn.disabled = true;
    }
}

function stateHandle2() {
    if (validatePassword($usernameSingUp.value)) {
        $singUpBtn.disabled = false;
    } else {
        $singUpBtn.disabled = true;
    }
}

function stateHandle3() {
    if (validateEmail($emailLogin.value)) {
        $buttonLogin.disabled = false;
    } else {
        $buttonLogin.disabled = true;
    }
}

function stateHandle4() {
    if (validatePassword($passwordLogin.value)) {
        $buttonLogin.disabled = false;
    } else {
        $buttonLogin.disabled = true;
    }
}

const validatePassword = (password) => {
    return String(password)
        .match(
            /^[A-Za-z]\w{7,14}$/
        );
};

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
