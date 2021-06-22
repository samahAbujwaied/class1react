import React from 'react';
import hornsAnimalData from './hornsAnimalData.json'
import SelectedBeast from './SelectedBeast'

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component{
   
        constructor(props) {
            super(props);
            this.state = {
                hornsData:hornsAnimalData,
                show:false,
                modaldata:{},
            }
        }
        handleshow = (data) => {
            this.setState({
                show:true,
                modaldata:data,
            })
        }
        handleclose = ()=>{
            this.setState({
                show:false,
            })
        }
    render(){
        return(
            <div style={{background:'lightyellow'}}>
            <Header/>
            <Main selectedmodal={this.handleshow } data={this.state.hornsData} />
            <SelectedBeast handleExit={this.handleclose} showdata={this.state.show } modaldata={this.state.modaldata}/>
            <Footer/>
            </div>
        )
    }
}
export default App;
