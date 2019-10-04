import {useState} from 'react';
import getMockText from '../../text.service';
import textConverter from '../../helpers/textHelper';

const FileText = () => {
    const [text, setText] = useState('');
    getMockText()
        .then(res => setText(res))
        .catch(e => setText('Error: ' + e));

    const getText = (text) => {
        const savedFile = window.localStorage.getItem('savedFile');
        const file = document.getElementById('file');
        if (!file) return null;
        savedFile ? file.innerHTML = savedFile : file.innerHTML = textConverter(text);
        return null;
    };
    return getText(text);
};

export default FileText;