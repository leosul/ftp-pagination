import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import FtpFormContainer from './components/FtpFormContainer';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <FtpFormContainer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
