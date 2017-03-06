import React from 'react';
import {render} from 'react-dom';

class mapComponent extends React.Component {
    componentWillMount() {
        console.log("mounted");
    }
    componentWillUnmount() {
        console.log("unmounted");
    }
    render() {

        return (
            <div>{this.props.newNumber}</div>
        );
    }
}

export default mapComponent;