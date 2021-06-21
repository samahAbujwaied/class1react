
import React from 'react';
import HornedBeast from './HornedBeast'
import hornsAnimalData from './hornsAnimalData.json'

class Main extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return ( 
            <div>
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
            </div>
        )
    }

}

export default Main;
