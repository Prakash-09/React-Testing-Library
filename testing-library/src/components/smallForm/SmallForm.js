import React from 'react';
import { Row, Col } from 'reactstrap';

class SmallForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
        }
    }

    handleChange(e) {
        let name = e.target.name;
        let val = e.target.val;

        this.setState({ [name]: val })
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <div>
                <h1> Hello {firstName} </h1>
                <form name="userName">
                    <Row className="m-0">
                        <Col className="p-1">
                            <label> First Name </label>
                            <input value={firstName} name="firstName" onChange={this.handleChange.bind(this)} className="w-100" />
                        </Col>
                        <Col className="p-1">
                            <label> Last Name </label>
                            <input value={lastName} name="lastName" onChange={this.handleChange.bind(this)} className="w-100" />
                        </Col>
                    </Row>
                </form>
            </div>
        );
    }
}
export default SmallForm;