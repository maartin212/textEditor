import React from 'react';
import './App.scss';
import ControlPanel from './control-panel/ControlPanel';
import FileZone from './file-zone/FileZone';

const App = () => {

    return (
        <div className='App'>
            <header>
                <span>Simple Text Editor</span>
            </header>
            <main>
                <ControlPanel/>
                <FileZone/>
            </main>
        </div>
    );

};

export default App;
