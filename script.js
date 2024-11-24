const captchaTextBox = document.querySelector(".captch_box input");
const captchaInputBox = document.querySelector(".captch_input input");
const refreshButton = document.querySelector(".refresh_button");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

let captchaText = null;

const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    
    const changeString = randomStringArray.map((char) =>
        Math.random() > 0.5 ? char.toUpperCase() : char
    );
    captchaText = changeString.join("   ");
    captchaTextBox.value = captchaText;
    console.log(captchaText);
};

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
};

const captchaKeyUpValidate = () => {
    submitButton.classList.toggle("disabled", !captchaInputBox.value);
};

const submitBtnClick = () => {
    const processedCaptchaText = captchaText.split(" ")
        .filter((char) => char !== " ")
        .join("");
    message.classList.add("active");

    if (captchaInputBox.value === processedCaptchaText) {
        message.innerText = "Entered captcha is correct";
    } else {
        message.innerText = "Captcha is incorrect";
    }

    console.log(processedCaptchaText);
};

refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);
generateCaptcha();
