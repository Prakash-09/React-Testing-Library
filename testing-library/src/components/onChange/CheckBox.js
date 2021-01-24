import React from 'react';

class CheckBox extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name: false,
        }
    }

    handleChange(e) {
        this.setState({
            name: !this.state.name
        })
    }
    render(){
        return(
            <input type = "checkbox" value={this.state.name} onChange={this.handleChange.bind(this)} />
        );
    }
}
export default CheckBox;