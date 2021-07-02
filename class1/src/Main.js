
import React from 'react';
import HornedBeast from './HornedBeast'
import hornsAnimalData from './hornsAnimalData.json'
import {Container, CardGroup,Card,Row} from 'react-bootstrap'

class Main extends React.Component {    
    render() {
        return (     
            <Row>
                {
                    hornsAnimalData.map(item => {
                        return (
                            <HornedBeast
                                title={item.title}
                                img_url={item.image_url}
                                description={item.description}
                                keyword={item.keyword}
                                selectedmodal={this.props.selectedmodal}
                            
                            />
                        )
                    })
                }
            </Row>
        )
    }

}

export default Main;
