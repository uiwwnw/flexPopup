import React, { Component } from 'react';
import { render } from 'react-dom';
import Popup from './components/react-flexpopup';

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state={
            testPopup0: false,
            testPopup1: false,
            testPopup2: false,
            testPopup3: false,
            testPopup4: false
        }
    }
    componentDidMount() {
        this.setState({testPopup0:!this.state.testPopup0});
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
                <Popup
                    bool={this.state.testPopup0} 
                    width="400"
                    title="기본팝업" 
                    button={
                        {
                            'btn1': 
                            {
                                'text': '팝업1', 
                                'function': this.popupOpen1.bind(this)
                            }, 
                            'btn2': 
                            {
                                'text': '팝업2', 
                                'function': this.popupOpen2.bind(this)
                            }, 
                            'btn3': 
                            {
                                'text': '팝업3', 
                                'function': this.popupOpen3.bind(this)
                            }, 
                            'btn4': 
                            {
                                'text': '팝업4', 
                                'function': this.popupOpen4.bind(this)
                            }
                        }
                    }
                >
                    <h3>기본팝업</h3>
                </Popup>
                <Popup
                    className="testClassNaming"
                    bool={this.state.testPopup1} 
                    width="300"
                    title="길이가 긴 팝업" 
                    button={
                        {
                            'positive': 
                            {
                                'text': 'OK', 
                                'callback': function(){alert('OK')}
                            }, 
                            'negative': 
                            {
                                'text': 'NO'
                            }
                        }
                    }
                >
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores molestias nulla nostrum, sint quo iusto enim beatae quis numquam quod. Quo alias eum beatae aut, non iste harum ratione tempora?
                        Similique natus minima recusandae temporibus facilis modi veritatis. Eum minima architecto officiis nisi et neque dolores quaerat assumenda aut? Commodi beatae, doloremque nesciunt sequi officia aliquid mollitia vel corporis ea.
                        Vero maiores exercitationem amet atque reprehenderit tempore recusandae dolore consequatur magnam quaerat nemo doloribus distinctio, praesentium voluptatibus fugiat non minima beatae nam eveniet ut obcaecati. Enim dolores ratione qui aut!
                        Autem magni nulla quibusdam excepturi asperiores atque minima exercitationem sequi ducimus tempora rerum distinctio totam aliquid, incidunt, tenetur voluptas inventore dolor ipsam ut saepe. Ipsa placeat suscipit at porro vel.
                        Vero hic natus debitis doloribus dolorum, similique quidem deserunt illum, optio, nisi unde esse et iste veritatis qui nesciunt. Molestiae sint, voluptates animi aut iusto beatae. Voluptatem ad est itaque.
                        Natus dolorum et molestiae officiis nostrum dignissimos. Provident odio impedit id odit magni mollitia! Nihil illum totam qui cumque in possimus. Quis illo magnam voluptate mollitia facilis praesentium ipsam repudiandae!
                        Quod officiis dolor placeat mollitia ex labore provident, veniam eius qui officia perferendis, quia molestias assumenda vitae veritatis? Sint, ratione eligendi quis tempora rerum qui sit provident quo eaque accusamus!
                        Maxime, nulla molestias nobis quasi nihil eveniet dolorum sunt? Accusantium nulla cupiditate dicta repellendus quod ipsam aut corporis repudiandae autem, facilis sapiente rerum libero labore nesciunt dignissimos enim tempore porro.
                        Soluta consectetur error beatae. Culpa, quo pariatur. Facere placeat rem eum iste sed et deleniti, libero a inventore facilis praesentium ipsum laboriosam harum quas sunt quam quis eos doloribus voluptate.
                        Laudantium modi natus reprehenderit voluptatibus laborum provident perferendis dignissimos fugit non officiis, dolor animi sequi ut corrupti repellendus neque iure eligendi quia debitis dicta dolores nulla quidem. Iusto, praesentium quisquam.
                    </p>
                </Popup>
                <Popup
                    bool={this.state.testPopup2} 
                    title="너비가 넓은 팝업" 
                    height="100"
                    button={
                        {
                            'positive': 
                            {
                                'text': 'OK'
                            }, 
                            'negative': 
                            {
                                'text': 'NO', 
                                'callback': function(){alert('NO')}
                            }
                        }
                    }
                >
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores molestias nulla nostrum, sint quo iusto enim beatae quis numquam quod. Quo alias eum beatae aut, non iste harum ratione tempora?
                        Similique natus minima recusandae temporibus facilis modi veritatis. Eum minima architecto officiis nisi et neque dolores quaerat assumenda aut? Commodi beatae, doloremque nesciunt sequi officia aliquid mollitia vel corporis ea.
                        Vero maiores exercitationem amet atque reprehenderit tempore recusandae dolore consequatur magnam quaerat nemo doloribus distinctio, praesentium voluptatibus fugiat non minima beatae nam eveniet ut obcaecati. Enim dolores ratione qui aut!
                        Autem magni nulla quibusdam excepturi asperiores atque minima exercitationem sequi ducimus tempora rerum distinctio totam aliquid, incidunt, tenetur voluptas inventore dolor ipsam ut saepe. Ipsa placeat suscipit at porro vel.
                        Vero hic natus debitis doloribus dolorum, similique quidem deserunt illum, optio, nisi unde esse et iste veritatis qui nesciunt. Molestiae sint, voluptates animi aut iusto beatae. Voluptatem ad est itaque.
                        Natus dolorum et molestiae officiis nostrum dignissimos. Provident odio impedit id odit magni mollitia! Nihil illum totam qui cumque in possimus. Quis illo magnam voluptate mollitia facilis praesentium ipsam repudiandae!
                        Quod officiis dolor placeat mollitia ex labore provident, veniam eius qui officia perferendis, quia molestias assumenda vitae veritatis? Sint, ratione eligendi quis tempora rerum qui sit provident quo eaque accusamus!
                        Maxime, nulla molestias nobis quasi nihil eveniet dolorum sunt? Accusantium nulla cupiditate dicta repellendus quod ipsam aut corporis repudiandae autem, facilis sapiente rerum libero labore nesciunt dignissimos enim tempore porro.
                        Soluta consectetur error beatae. Culpa, quo pariatur. Facere placeat rem eum iste sed et deleniti, libero a inventore facilis praesentium ipsum laboriosam harum quas sunt quam quis eos doloribus voluptate.
                        Laudantium modi natus reprehenderit voluptatibus laborum provident perferendis dignissimos fugit non officiis, dolor animi sequi ut corrupti repellendus neque iure eligendi quia debitis dicta dolores nulla quidem. Iusto, praesentium quisquam.
                    </p>
                </Popup>
                <Popup
                    bool={this.state.testPopup3} 
                    width="570"
                    button={{'positive': {'text': 'CLOSE'}}}
                >
                    <h3>헤더가 없는 팝업</h3>
                    <p>
                        Lorem ipsum dolor sit.
                    </p>
                </Popup>
                <Popup
                    bool={this.state.testPopup4}
                    title="푸터가 없는 팝업"  
                >
                    <p>
                        Lorem ipsum dolor sit.
                    </p>
                </Popup>
               
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));