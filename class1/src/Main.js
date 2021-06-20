import React from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
class Main extends React.Component {
    render() {
        return (
            <div>
               <Comp1/>
               
               <Comp2/> 
            </div>
        )
    }
}
export default Main