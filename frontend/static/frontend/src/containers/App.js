import React, {Component} from 'react';
import AdminViewContainer from './adminView'
import CardListContainer from './indivCards'
import {Container} from 'react-bootstrap';

import '../App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentScreen : "enterInfo"
        }
    }
    render() {
        return (
        <Container>
             <div className="App">
            <HeroHeader/>
            {(() => {
                                switch (this.state.currentScreen) {
                                    case 'enterInfo':
                                        return <AdminViewContainer/>;
                                    default:
                                       return  <CardListContainer/>;

                                }
                                      })()}

                </div>
        </Container>

        );
    }
}

export default App;


class HeroHeader extends Component {
    render() {
        return (
            <div>
                {/*https://codepen.io/diegopardo/pen/GqEho*/}
                <div className="TinT">
                    <div className="Twenty head">
                        <span className="letter" data-letter="T">T</span>
                        <span className="letter" data-letter="W">W</span>
                        <span className="letter" data-letter="E">E</span>
                        <span className="letter" data-letter="N">N</span>
                        <span className="letter" data-letter="T">T</span>
                        <span className="letter" data-letter="Y">Y</span>
                    </div>
                    <div className="in head">
                        <span className="letter" data-letter=""></span>
                        <span className="letter" data-letter="I">I</span>
                        <span className="letter" data-letter="N">N</span>
                        <span className="letter" data-letter=""></span>

                    </div>

                    <div className="Tech head">
                        <span className="letter" data-letter="T">T</span>
                        <span className="letter" data-letter="E">E</span>
                        <span className="letter" data-letter="C">C</span>
                        <span className="letter" data-letter="H">H</span>
                    </div>

                    <div className="sub-head">
                        {/*<h3 className="txtanim1 delay1" >*/}
                            {/*<span style="display: inline-block; transform: translate3d(0px, 0%, 0px); transition: all 0.3s ease 0.1s;">A</span>*/}
                            {/*<span style="display: inline-block; transform: translate3d(0px, 0%, 0px); transition: all 0.3s ease 0.1s;">L</span>*/}
                            {/*<span style="display: inline-block; transform: translate3d(0px, 0%, 0px); transition: all 0.3s ease 0.1s;">O</span>*/}
                            {/*<span style="display: inline-block; transform: translate3d(0px, 0%, 0px); transition: all 0.3s ease 0.1s;">O</span>*/}
                            {/*<span style="display: inline-block; transform: translate3d(0px, 0%, 0px); transition: all 0.3s ease 0.1s;">k</span>*/}
                            {/*<span style="display: inline-block; transform: translate3d(0px, 0%, 0px); transition: all 0.3s ease 0.1s;">I</span>*/}
                            {/*<span style="display: inline-block; transform: translate3d(0px, 0%, 0px); transition: all 0.3s ease 0.1s;">N</span>*/}
                            {/*<span style="display: inline-block; transform: translate3d(0px, 0%, 0px); transition: all 0.3s ease 0.1s;">S</span>*/}
                            {/*<span style="display: inline-block; transform: translate3d(0px, 0%, 0px); transition: all 0.3s ease 0.1s;">I</span>*/}
                            {/*<span style="display: inline-block; transform: translate3d(0px, 0%, 0px); transition: all 0.3s ease 0.1s;">D</span>*/}
                            {/*<span style="display: inline-block; transform: translate3d(0px, 0%, 0px); transition: all 0.3s ease 0.1s;">E</span>*/}
                        {/*</h3>*/}
                    </div>
             </div>

        {/*end of codepen*/
        }
    </div>

    )
    }
}

