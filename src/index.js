import React, { Component } from 'react';
import { render } from 'react-dom';
import Popup from './components/react-flexpopup';

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state={
            _this: this,
            testPopup1: false,
            testPopup2: false,
            testPopup3: false,
            testPopup4: false
        }
    }

    popupOpen1() {
        this.setState({testPopup1:!this.state.testPopup1});
    }

    popupOpen2() {
        this.setState({testPopup2:!this.state.testPopup2});
    }
    popupOpen3() {
        this.setState({testPopup3:!this.state.testPopup3});
    }
    popupOpen4() {
        this.setState({testPopup4:!this.state.testPopup4});
    }

    render() {
        return (
            <div>
                <button onClick={this.popupOpen1.bind(this)}>팝업호출</button>
                <button onClick={this.popupOpen2.bind(this)}>팝업호출</button>
                <Popup
                    className="testClassNaming"
                    bool={this.state.testPopup1} 
                    width="500"
                    title="팝업타이틀" 
                    button={{'positive': {'text': 'YES', 'callback': function(){alert('close popup')}}, 'negative': {'text': 'NO', 'callback': function(){alert('close popup too')}}}}
                >
                    <h3>가나다</h3>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                </Popup>
                <Popup
                    bool={this.state.testPopup2} 
                    title="팝업타이틀2 이너팝업" 
                    button={{'positive': {'text': '타이틀없는팝업', 'function': this.popupOpen3.bind(this)}, 'negative': {'text': '버튼없는팝업', 'function': this.popupOpen4.bind(this)}}}
                >
                    <h3>가나다</h3>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                </Popup>
                <Popup
                    bool={this.state.testPopup3} 
                    width="570"
                    button={{'positive': {'text': 'CLOSE'}}}
                >
                    <h3>타이틀없는팝업</h3>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                    <p>dddsdss</p>
                </Popup>
                <Popup
                    bool={this.state.testPopup4}
                    title="팝업타이틀4 버튼없음"  
                >
                    <p>dsdasasasdjlkasdjkajdkjasdljadkjlsadasdsdasasasdjlkasdjkajdkjasdljadkjlsadasdsdasasasdjlkasdjkajdkjasdljadkjlsadas</p>
                    <p>dddsdss</p>
                </Popup>
               
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));