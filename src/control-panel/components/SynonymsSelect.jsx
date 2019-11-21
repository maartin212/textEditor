import React, {useState} from "react";
import Modal from "./Modal";
import {activeElNode} from "../../helpers/fileHelpers";
import {synonymsAPI} from "../../config";

const SynonymsSelect = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [synonyms, setSynonyms] = useState([])
    const [selectedNode, setSelectedNode] = useState('')

    const synonymsSelectHelper = () => {
        const activeEl = window.getSelection();
        const activeNode = activeElNode()
        if(!activeNode) return;
        setSelectedNode(activeNode)
        fetch('https://cors-anywhere.herokuapp.com/'+synonymsAPI+activeEl.toString())
            .then(res => res.json())
            .then(jsonRes => {
                setSynonyms(jsonRes.map(item => item.word))
                setShowModal(!showModal)
            })
            .catch(e => console.error(e))
    };

    return <>
        <button className='format-action' type='button' onClick={synonymsSelectHelper}><span>Synonyms</span></button>
        <Modal show={showModal} activeNode={selectedNode} onClose={() => setShowModal(!showModal)} state={props.state} dispatch={props.dispatch}>
                {synonyms.map(item => <div key={item}>
                    <input type='radio' name='synonym' id={item} value={item}/>
                        <label htmlFor={item}>{item}</label>
                </div>)}
        </Modal>
    </>

}

export default SynonymsSelect