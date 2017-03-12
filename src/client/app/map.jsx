import React from 'react';
import {render} from 'react-dom';

class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }

    }
    componentDidMount(){
        this.map = new google.maps.Map(this.mapDiv, {
            center: {lat: 33.7456, lng: -117.8678},
            zoom: 10
        });
        navigator.geolocation.getCurrentPosition((position) => {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            if (!this.infoWindow) {
                //create info window, if it hasnt been created yet
                this.infoWindow = new google.maps.InfoWindow({map: this.map});
            }
            this.infoWindow.setPosition(pos);
            this.infoWindow.setContent('You are here');
            this.map.setCenter(pos);
        });

        this.ref = this.props.base.bindToState(`users`, {
            context: this,
            state: 'users',
            asArray: true
        });
    }
    componentWillUpdate(nextProps, nextState) {
        const diff = nextState.users.length - this.state.users.length;
        if (diff > 0) {
            nextState.users.slice(-diff, diff).map((user) => {
                return new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    position: user.location,
                    map: this.map,
                    label: user.name,
                });
            });
        }
    }
    componentWillUnmount() {
        this.props.base.removeBinding(this.ref);
    }
    render() {

        return (
            <div style={{width:'100%', height:'100%'}} ref={(map) => {this.mapDiv = map}} id="map" className="col-md-12 col-xs-12"></div>
        );
    }
}

export default MapComponent;