import React from 'react'

const TextFactory = (props) => {
    return props.state.text.map((word, index) => {
        const Tag = word.tag || 'span'
        return <Tag className={word.classes.join(' ')} style={word.styles} id={index} key={index}>{word.value} </Tag>
    })
}

export default TextFactory