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
                    <Modal.Title className="modal_title">{user.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="info">
                        <h4>See My Work</h4>{user.videos.map((video_id, i)=>{
                        return <iframe key={i} src={"https://www.youtube.com/embed/" + video_id} width="460" height="305"/>
                    })}
                        <h4>Name </h4><p className="name_input">{user.name}</p>
                        <h4>Location </h4><p className="location_input">{user.location.name}</p>
                        <h4>Age </h4><p className="age_input">{user.age}</p>
                        <h4>About Me</h4><p className="description_input">{user.description}</p>
                        <h4>Looking For </h4><p className="interest_input">{user.interest}</p>
                        <h4>My Skills</h4>
                        {user.skills.map((i,skill) => {
                            return (
                                <div key={i}>{skill}</div>
                            )

                        })}
                        <h4>Gear </h4><p className="equipment_input">{user.equipment}</p>
                    </div>
                </Modal.Body>
            </Modal>

        );
    }
}

export default ProfileModalComponent;