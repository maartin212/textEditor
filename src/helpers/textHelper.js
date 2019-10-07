const getWords = (text) => {
    return text.split(' ');
};

const spanWords = (words) => {
    return words.map((word, index) => `<span id=${index}>${word}</span>`);
};

const joinWords = (spannedWords) => {
    return spannedWords.join(' ');
};

const textConverter = (text) => {
    const words = getWords(text);
    const spannedWords = spanWords(words);
    return joinWords(spannedWords);
};

export default textConverter;