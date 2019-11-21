import React, {useRef} from 'react'

const TextFactory = (props) => {

    const {state} = props

    const activeEl = useRef(null)
// console.log(activeEl.current)
    return state.text.map((word, index) => {
        const Tag = word.tag || 'span'
        return <Tag className={word.classes.join(' ')} ref={activeEl} onClick={() => activeEl.current = window.getSelection().anchorNode.parentElement} style={word.styles} id={index} key={index}>{word.value} </Tag>
    })
}

export default TextFactory