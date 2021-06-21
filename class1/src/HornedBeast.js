import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


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
            <div className='beast'>
                <div className="justify-content-md-center"class="col-sm-3 col-md-6 col-lg-12">
                    <Card style={{ width: '70rem' }}>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Img onClick={this.addVote0} variant="top" src={this.props.img_url} alt={this.props.title} />

                        <Button variant="primary"> 💖 {this.state.numberVotes}</Button>
                        <br />
                    </Card>
                </div>
            </div>
        )
    }
}

export default HornedBeast;