import React, {Component} from 'react';
import {Button,Card } from 'react-bootstrap';
import '../App.css';
// const $ = window.$;





class CardListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardList : []
        }
    };


    componentDidMount() {
        fetch('/api/interview/').then((response) => {
            if (response.status !== 200) {
                console.log("problem")
            }

            return response.json();
        }).then(json => {
            let cardList = [...this.state.cardList];
            cardList.push(json);
            console.log('json', json);
            this.setState({cardList: json});
            //this is working, still getting a map of undefined

        });

    }

    render() {
         let interview = this.state.cardList.map((card) => {
            return (
                <li key={card.id}>
                <Card style={{width: '18rem'}} className="card-main">
                <Card.Img variant="top" className="card-image" src={card.picture}/>
                <Card.Body>
                    <Card.Title> {card.subjectName} </Card.Title>
                    <Card.Text>
                        {card.tagline}
                    </Card.Text>
                    <Button variant="secondary" className="btn-secondary interv-button">Read The Interview</Button>
                </Card.Body>
            </Card>
                </li>
            )
        });


        return (
         <ul>{interview}</ul>
        )
    }
}

export default CardListContainer


// class IndivCardContainer extends Component {
//         constructor(props){
//             super(props);
//         }
//
//     render() {
//
//         return (
//             <div>
//
//                 {/*<ul>{interview}</ul>*/}
//                 hello
//
//             </div>
//     )
//         ;
//     }
// }
//


