import React from 'react';

class SmallForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
        }
    }

    handleChange = (e) => {
        let name = e.target.name;
        let val = e.target.val;
        
        this.setState({ [name] : val})
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <div>
                <h1> Hello {firstName} </h1>
                <form name="userName">
                    <label>
                        First Name
                        <input value={firstName} name="firstName" onChange={this.handleChange} />
                    </label>
                    <label>
                        Last Name
                        <input value={lastName} name="lastName" onChange={this.handleChange} />
                    </label>
                </form>
            </div>
        );
    }
}
export default SmallForm;