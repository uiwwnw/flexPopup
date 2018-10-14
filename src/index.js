import React, { Component } from 'react';
import { render } from 'react-dom';
import Popup from './components/Popup';

export default class App extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <Popup title="팝업타이틀" button={{'positive': 'YES', 'negative': 'NO'}}>
                <h3>가나다</h3>
                <p>dddsdss</p>
            </Popup>
        );
    }
}


render(<App />, document.getElementById('root'));