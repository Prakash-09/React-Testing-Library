import React from 'react';

class SelectTag extends React.Component{
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
            <select value={this.state.name} onChange={this.handleChange.bind(this)} >
                <option></option>
                <option>Sai</option>
                <option>Prakash</option>
            </select>
        );
    }
}
export default SelectTag;