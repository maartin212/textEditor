const saveFileHandler = () => {
    const file = document.getElementById('file');
    window.localStorage.setItem('savedFile', file.innerHTML);
};

export default saveFileHandler;