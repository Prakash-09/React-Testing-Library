import React from 'react';

class TextField extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name: '',
        }
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    render(){
        return(
            <input type = "text" value={this.state.name} onChange={this.handleChange.bind(this)} />
        );
    }
}
export default TextField;