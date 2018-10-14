import React, { Component } from 'react';
import { render } from 'react-dom';
import Popup from './components/Popup';

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state={
            testPopup: false
        }
    }

    popupOpen() {
        this.setState({testPopup:!this.state.testPopup});
    }

    render() {
        return (
            <div>
                <button onClick={this.popupOpen.bind(this)}>팝업호출</button>
                <Popup bool={this.state.testPopup} title="팝업타이틀" button={{'positive': 'YES', 'negative': 'NO'}}>
                    <h3>가나다</h3>
                    <p>dddsdss</p>
                </Popup>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));