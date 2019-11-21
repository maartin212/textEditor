import React from 'react'

export const synonymsAPI = 'https://api.datamuse.com/words?ml=';

export const Modifiers = [
    {styleType:'bold', symbol:<b>B</b>, type:'class'},
    {styleType:'italic', symbol:<i>I</i>, type:'class'},
    {styleType:'underline', symbol:<u>U</u>, type:'class'},
    {styleType:'monospace', symbol:<span>M</span>, type:'class'},
    {styleType:'h1', symbol:<h1>h1</h1>, type:'tag'},
    {styleType:'h2', symbol:<h2>h2</h2>, type:'tag'},
    {styleType:'h3', symbol:<h3>h3</h3>, type:'tag'},
];

export const colorsList = [
    'colors',
    'red',
    'blue',
    'yellow',
    'green',
    'orange',
];

export const textSizes = {
    min: 1,
    max: 50
};

