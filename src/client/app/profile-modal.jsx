import React from 'react';
import {render} from 'react-dom';
import { Modal } from 'react-bootstrap';

class ProfileModalComponent extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const user = this.props.user;
        return (
            <Modal show={user.showModal} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>{user.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="info">
                        <h4>Name </h4><p class="name_input">{user.name}</p>
                        <h4>Location </h4><p class="location_input">{user.location}</p>
                        <h4>Age </h4><p class="age_input">{user.age}</p>
                        <h4>About Me</h4><p class="description_input">{user.description}</p>
                        <h4>Looking For </h4><p class="interest_input">{user.interest}</p>
                        <h4>My Skills</h4><p class="skills_input">{user.skills}</p>
                        <h4>Gear </h4><p class="equipment_input">{user.equipment}</p>
                    </div>
                </Modal.Body>
            </Modal>

        );
    }
}

export default ProfileModalComponent;