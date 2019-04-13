import React, {Component} from 'react';

import CardListContainer from './indivCards'
import {Container} from 'react-bootstrap';

import '../App.css';

class App extends Component {
    render() {
        return (

            <div className="App">
                <HeroHeader/>
                <CardListContainer/>


            </div>

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
             </div>

        {/*end of codepen*/
        }
    </div>

    )
    }
}

