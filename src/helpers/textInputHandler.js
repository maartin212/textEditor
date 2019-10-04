import textConverter from './textHelper';

const textInputHandler = () => {
    const text = document.getElementById('text-input');
    const file = document.getElementById('file');
    file.innerHTML = textConverter(text.value);
};

export default textInputHandler;