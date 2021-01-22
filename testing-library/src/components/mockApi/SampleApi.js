import React from 'react';
import { UserService } from '../../services/UserService';
import { Row, Col } from 'reactstrap';

class SampleApi extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        UserService.getUsersFromApi().then(response => {
            this.setState({ users: response })
        })
        .catch(error => console.log('errorMsg', error))
    }

    render(){
        const { users } = this.state;
        return(
            <div>
                { users.length === 0 && <h5>Loading...</h5> }
                { users.length !== 0 && 
                    <Row className="m-0" xs="1">
                        {users.map((user, userIdx) => 
                            <Col className="p-0" key={userIdx}>{user.name} : {user.email}</Col>
                        )}
                    </Row>
                }
            </div>
        );
    }
}
export default SampleApi;