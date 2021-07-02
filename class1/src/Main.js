
import React from 'react';
import HornedBeast from './HornedBeast'
import hornsAnimalData from './hornsAnimalData.json'
import {Row} from 'react-bootstrap'
import Header from './Header';

class Main extends React.Component {
    constructor(props){
        super(props)

        this.state={
            totalvotes:0
        }
    }

    totalofvotes =()=>{
        this.setState({
            totalvotes: this.state.totalvotes+1,
        })
    }
    render() {
        return ( 
       <>
       <h1 style={{background:"lemonchiffon" , textAlign:"center" ,fontFamily: 'Bradley Hand'}} > total {this.state.totalvotes}</h1>
            <Row>
               
                {
                    
                    hornsAnimalData.map(item => {
                        return (
                            <HornedBeast
                                title={item.title}
                                img_url={item.image_url}
                                description={item.description}
                                keyword={item.keyword}
                                totalvots={this.totalofvotes}
                            />
                        )
                    })
                }
            </Row>
        </>
        )
    }

}

export default Main;
