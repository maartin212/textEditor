import React, {useReducer} from 'react';
import './App.scss';
import ControlPanel from './control-panel/ControlPanel';
import FileZone from './file-zone/FileZone';
import reducer, {initialState} from "./state";

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='App'>
            <header>
                <span>Simple Text Editor</span>
            </header>
            <main>
                <ControlPanel dispatch={dispatch} state={state}/>
                <FileZone dispatch={dispatch} state={state}/>
            </main>
        </div>
    );

};

export default App;
