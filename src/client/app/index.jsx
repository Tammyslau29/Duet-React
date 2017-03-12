import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import MapComponent from './map.jsx';
import ProfilesComponent from './profiles.jsx';
import FormComponent from './form.jsx';

import Rebase from 're-base';
var base = Rebase.createClass({
    apiKey: "AIzaSyBFllsD1oZhzNqwUBsRjwl737elLzAHhhk",
    authDomain: "duet-121be.firebaseapp.com",
    databaseURL: "https://duet-121be.firebaseio.com",
    storageBucket: "duet-121be.appspot.com",
    messagingSenderId: "150524076776"
});
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nav_bar_state: 'profiles',
        };
        this.returnToProfile = this.returnToProfile.bind(this)
    }
    returnToProfile(profile){
        this.setState({nav_bar_state: profile})
    }
    render() {
        let child;
        switch(this.state.nav_bar_state) {
            case 'profiles':
                child = <ProfilesComponent base={base}/>;
                break;
            case 'map':
                child = <MapComponent base={base} />;
                break;
            case 'form':
                child = <FormComponent base={base} returnToProfile={this.returnToProfile}/>;
                break;
        }

        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">duet.</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#" onClick={() => { this.setState({ nav_bar_state: 'profiles' }); }}>Home</NavItem>
                            <NavItem eventKey={2} href="#" onClick={() => { this.setState({ nav_bar_state: 'map' }); }}>Discover</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Sign In</NavItem>
                            <NavItem eventKey={2} href="#" onClick={() => { this.setState({ nav_bar_state: 'form' }); }}>Create Profile</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {child}
            </div>
        );
    }
}
render(<App/>, document.getElementById('app'));