import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'semantic-ui-less/semantic.less'
import { GlobalProvider } from './store/GlobalState';

ReactDOM.render(
    <React.StrictMode>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </React.StrictMode>,
    document.querySelector('#root')
)

