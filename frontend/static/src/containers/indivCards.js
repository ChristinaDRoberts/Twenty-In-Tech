import React, {Component} from 'react';
import {Button,Card } from 'react-bootstrap';


import '../App.css';

class IndivCardContainer extends Component {
    render() {
        return (
            <div>
            <Card style={{width: '18rem'}} className="card-main">
                <Card.Img variant="top" className="card-image" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"/>
                <Card.Body>
                    <Card.Title>Name of Subject</Card.Title>
                    <Card.Text>
                        A short synopse of interview. Grab attention here
                    </Card.Text>
                    <Button variant="secondary" className="btn-secondary interv-button">Read The Interview</Button>
                </Card.Body>
            </Card>


            </div>
    )
        ;
    }
}

export default IndivCardContainer;

