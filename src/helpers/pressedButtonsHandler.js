const pressedButtonHandler = (tag, click) => {
    const selectedButton = document.getElementById(`${tag}Button`);
    if(!selectedButton) return;
    const buttonClassList = selectedButton.classList;
    click ? buttonClassList.add('clicked') : buttonClassList.toggle('clicked');
};

export default pressedButtonHandler;