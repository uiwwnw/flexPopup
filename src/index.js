import React, { Component } from 'react';
import { render } from 'react-dom';
import Popup from '../react-flexpopup';

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
                <Popup 
                    bool={this.state.testPopup} 
                    title="팝업타이틀" 
                    button={{'positive': {'text': 'YES', 'callback': function(){alert('close popup')}}, 'negative': {'text': 'NO', 'callback': function(){alert('close popup too')}}}}
                >
                    <h3>가나다</h3>
                    <p>dddsdss</p>
                </Popup>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));