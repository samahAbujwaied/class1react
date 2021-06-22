import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Image } from 'react-bootstrap'
// import Image from 'react-bootstrap/Image'
// import Card from 'react-bootstrap'
// import col from ''

const styles = {
    myCoolButton: {
        paddingTop: "10vh",
        paddingBottom: "10vh",
        paddingRight: "10vw",
        paddingLeft: "10vw"
    }
} 

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberVotes: 0,
        }
    }
    

    addVote0 = () => {
        this.setState({
            numberVotes: this.state.numberVotes + 1,
        })
    }

    render() {
        return (

            <Col xs={12} md={6} sm={9} xl={4} style={{ paddingTop: "10vh" , paddingLeft:"10vh"}} >
                <Card style={{width:"80%", height:"100%"}} bg={'warning'}>
                    <Card.Img width={200}
                        height={280}  onClick={this.addVote0} variant="top" src={this.props.img_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title style={{ alignItems: 'center' }} >{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>

                    <Button variant="info"> 💖 {this.state.numberVotes}</Button>

                </Card>
            </Col>

        )
    }
}

export default HornedBeast;