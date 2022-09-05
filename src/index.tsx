import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import '../src/components/App/App.scss'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        
        <App></App>
        
    </React.StrictMode>,
    document.getElementById('root')
);

