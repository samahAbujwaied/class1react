
import React from 'react';
import HornedBeast from './HornedBeast'
import hornsAnimalData from './hornsAnimalData.json'
import {Container, CardGroup,Card,Row} from 'react-bootstrap'

// const styles = {
//     card: {
//       backgroundColor: '#B7E0F2',
//       borderRadius: 55,
//       padding: '3rem'
//     },
//     cardImage: {
//       objectFit: 'cover',
//       borderRadius: 55
//     }
//   }
class Main extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return ( 
            // <Container xs={4} fluid>
            // <CardGroup className="m-5 d-block">
            //   <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>
                {
                    hornsAnimalData.map(item => {
                        return (
                            <HornedBeast
                                title={item.title}
                                img_url={item.image_url}
                                description={item.description}
                            
                            />
                        )
                    })
                }
            </Row>
    //         </Card>
    //   </CardGroup>
    // </Container>
        )
    }

}

export default Main;
