import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Image } from 'react-bootstrap'
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
    addVote = () => {
        this.setState({
            numberVotes: this.state.numberVotes + 1,
        })
    }

    clickme = () => {
        this.props.selectedmodal({
            title: this.props.title,
            img_url: this.props.img_url,
            description: this.props.description,
            keyword: this.props.keyword
        })
       
    }
    render() {
        return (

            <Col xs={12} md={6} sm={9} xl={4} style={{ paddingTop: "10vh", paddingLeft: "10vh" }} >
                <Card style={{ width: "80%", height: "100%" }} bg={'warning'}>
                    <Card.Img width={200}
                        height={280}  onClick={this.clickme}  variant="top" src={this.props.img_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title style={{ alignItems: 'center' }} >{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    
                        <Button style={{ width: "50%", marginLeft: "10vh" }} variant="info"> 💖 {this.state.numberVotes}</Button>
                        <Button  style={{ width: "50%", marginTop: "2vh", marginBottom:'2vh', marginLeft: "10vh" }} variant="danger" onClick={this.addVote}> Click me </Button>
                   

                </Card>
            </Col>

        )
    }
}

export default HornedBeast;