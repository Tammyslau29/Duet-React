import React from 'react';
import {render} from 'react-dom';
import { Carousel } from 'react-bootstrap';
import ProfileModalComponent from './profile-modal.jsx'

class ProfilesComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    componentDidMount(){
        this.ref = this.props.base.bindToState(`users`, {
            context: this,
            state: 'users',
            asArray: true
        });
    }
    componentWillUnmount() {
        this.props.base.removeBinding(this.ref);
    }
    toggleModal(i, open){
        const user = Object.assign({}, this.state.users[i]);
        user.showModal = open;

        this.setState({
           users: [
               ...this.state.users.slice(0, i),
               user,
               ...this.state.users.slice(i + 1)
           ]
        });
    }
    render() {
        return (
            <div>
                <Carousel>
                    {this.state.users.map((user, i) => {
                        return (
                            <Carousel.Item key={i} onClick={() => { this.toggleModal(i, true); }}>
                                <div className="name_display">
                                    <h1 className="name">{user.name}</h1>
                                </div>
                                <img className="display_pic" src="https://www.wpsymposiumpro.com/wp-content/uploads/2014/04/iStock_000033523696Small.jpg"/>
                                <ProfileModalComponent
                                    user={user}
                                    hide={() => this.toggleModal(i, false)}
                                />
                            </Carousel.Item>
                        )

                    })}
                </Carousel>

            </div>
        );
    }
}

export default ProfilesComponent;