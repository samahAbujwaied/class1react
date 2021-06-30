
import React from 'react';
import HornedBeast from './HornedBeast'
import hornsAnimalData from './hornsAnimalData.json'
import { Container, CardGroup, Card, Row } from 'react-bootstrap'
import FilterForm from './FilterForm'

class Main extends React.Component {


    render() {
        return (
            <>
            
            <Container xs={4} fluid>
                <CardGroup className="m-5 d-block">

                    <Card className="m-5 border-0 shadow">
                        <Row>
                            {
                                this.props.data.map(item => {
                                    return (
                                        <HornedBeast
                                            title={item.title}
                                            img_url={item.image_url}
                                            description={item.description}
                                            modal={this.props.selectedmodal}

                                        />
                                    )
                                })
                            }
                        </Row>

                    </Card>
                </CardGroup>
            </Container>
           
            </>
        )
    }

}

export default Main;
