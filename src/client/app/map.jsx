import React from 'react';
import {render} from 'react-dom';

class MapComponent extends React.Component {
    componentWillMount() {
        console.log("mounted");
    }
    componentWillUnmount() {
        console.log("unmounted");
    }
    render() {

        return (
            <div>map</div>
        );
    }
}

export default MapComponent;