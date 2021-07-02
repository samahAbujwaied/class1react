import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div style={{background:"lemonchiffon" , textAlign:"center" ,fontFamily: 'Bradley Hand'}}>
                <h1> Horns Gallery </h1>
                <h2>
                    {this.props.total}
                </h2>
            </div>
        )
    }
}
export default Header