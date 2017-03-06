import React from 'react';
import {render} from 'react-dom';

class ProfilesComponent extends React.Component {
    componentWillMount() {
        console.log("mounted");
    }
    componentWillUnmount() {
        console.log("unmounted");
    }
    render() {

        return (
            <div>profiles</div>
        );
    }
}

export default ProfilesComponent;