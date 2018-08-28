const colorCtrlLeft = document.querySelector("#color-ctrl-left");
const colorCtrlRight = document.querySelector("#color-ctrl-right");

const backgroundGradient = document.querySelector('body');

const colorTextLeft = document.querySelector("#color-text-left");
const colorTextRight = document.querySelector("#color-text-right");

const btnRandomColor = document.querySelector(".btn__random-color-generator");

const colorControllers = [colorCtrlLeft, colorCtrlRight];

// Initialize values
const init = () => {
    colorTextLeft.textContent = "#54a6d0";
    colorTextRight.textContent = "#b0d7b3";
    colorCtrlLeft.value = "#54a6d0";
    colorCtrlRight.value = "#b0d7b3";
}

init();

const getValueColorInputs = () => {
    let valueColorLeft = colorCtrlLeft.value;
    let valueColorRight = colorCtrlRight.value;
    return {
        leftColor: valueColorLeft,
        rightColor: valueColorRight
    }
}

const displayColorCodes = (leftColor, rightColor) => {
    colorTextLeft.textContent = leftColor;
    colorTextRight.textContent = rightColor;
    colorCtrlLeft.value = leftColor;
    colorCtrlRight.value = rightColor;
}

const gradientCSS = (leftColor, rightColor) => {
    let output = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
    return output;
}

const setBackgroundColor = () => {
    const inputValues = getValueColorInputs();
    const gradient = gradientCSS(inputValues.leftColor, inputValues.rightColor);
    displayColorCodes(inputValues.leftColor, inputValues.rightColor);
    btnRandomColor.style.background = gradient;
    return backgroundGradient.style.background = gradient;
}

const generateRandomColor = () => {
    const randomColor1 = `#${Math.ceil(Math.random() * 1000000)}`;
    const randomColor2 = `#${Math.ceil(Math.random() * 1000000)}`;
    const gradient = gradientCSS(randomColor1, randomColor2);
    displayColorCodes(randomColor1, randomColor2);
    btnRandomColor.style.background = gradient;
    return backgroundGradient.style.background = gradient;
}

// Eventhandler for setting color gradient
colorControllers.forEach((colorController) => {
    colorController.addEventListener('input', setBackgroundColor);
});

// Eventhandler for generating random color
btnRandomColor.addEventListener("click", generateRandomColor);

