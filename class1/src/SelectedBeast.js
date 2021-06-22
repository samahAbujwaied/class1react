import React, { Component } from 'react'
import { Card,Modal, Button } from 'react-bootstrap'

export class SelectedBeast extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showdata}  >
                    <Modal.Header>
                        <Modal.Title style={{ alignItems: 'center' }}>{this.props.modaldata.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Card style={{ width: "80%", height: "100%",marginLeft: "7vh" }} bg={'warning'}>
                            <Card.Img width={200}
                                height={280}  src={this.props.modaldata.img_url} alt={this.props.title} />
                            <Card.Body>

                                <Card.Text>
                                    {this.props.modaldata.description}
                                </Card.Text>
                            </Card.Body>




                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button  variant="secondary" onClick={this.props.handleExit}>
                            Close
          </Button>
                        
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default SelectedBeast
