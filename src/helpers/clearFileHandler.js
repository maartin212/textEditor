const clearFileHandler = () => {
    window.localStorage.removeItem('savedFile');
    document.location.reload();
};

export default clearFileHandler;