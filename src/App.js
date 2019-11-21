import React, {useReducer, useEffect} from 'react';
import './App.scss';
import ControlPanel from './control-panel/ControlPanel';
import FileZone from './file-zone/FileZone';
import reducer, {initialState} from "./state";

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
    }, [])

    return (
        <div className='App'>
            <header>
                <span>Simple Text Editor</span>
            </header>
                <main>
                    <ControlPanel {...{state, dispatch}}/>
                    <FileZone {...{state, dispatch}}/>
                </main>
        </div>
    );

};

export default App;
